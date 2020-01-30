import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router-dom';
import { getPatient } from '../../../graphql/queries';
import { getMedicalConsultation } from '../../../graphql/custom-queries';

const useConsultationProcess = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ createNewPatient, setCreateNewPatient ] = useState(false);
    const [ createNewPatientName, setCreateNewPatientName ] = useState("");
    const [ formActivePanelChanged, setFormActivePanelChanged ] = useState(false);
    const [ formActivePanel, setFormActivePanel ] = useState(0);
    const [ selectedDate, setSelectedDate ] = useState(new Date());
    const [ patientData, setPatientData ] = useState({});
    const [ global, setGlobal ] = useState({});

    let { consultation, patient } = useParams();

    const swapFormActive = (param) => (e) => {
        setFormActivePanelChanged(true);
        setFormActivePanel(param);
    }

    const handleNextPrevClick = (param) => (e) => {
        setFormActivePanelChanged(true);
        setFormActivePanel(param);
    }

    const handleSubmission = () => {
        alert('Form submitted!');
    }

    const calculateAutofocus = () => {
        if (formActivePanelChanged) {
            return true
        }
    }

    const setGlobalData = (object) => {
        setGlobal(object);
    }

    useEffect(() => {
        let didCancel = false;
        var _patientData = {};

        const fetch = async () => {
            try {
                setFormActivePanel(4);
                if (consultation === "null") {
                    setCreateNewPatient(true);
                    setCreateNewPatientName(patient);
                    setLoading(false);
                }else{
                    API.graphql(graphqlOperation(getMedicalConsultation, { id: consultation}))
                    .then((r) => {
                        setGlobal({
                            consultationid: consultation,
                            patientid: patient,
                            patient: r.data.getMedicalConsultation.patient,
                            medicalHistory: r.data.getMedicalConsultation.medicalHistory
                        });
                        setPatientData(r.data.getMedicalConsultation.patient);
                        setLoading(false);
                        //console.log(r.data.getMedicalConsultation.patient.patientHistory);
                    })
                    .catch((err) => { 
                        console.log("Ocurrio un error: ",err);
                        setLoading(false);
                        setError(true);
                    })
                }
            } catch (error) {
                setLoading(false);
                setError(true);
            }

            if (!didCancel) {
                setPatientData(_patientData);
                //setLoading(false);
            }
        };

        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

    return { setGlobalData, global, error, loading, swapFormActive, handleNextPrevClick, handleSubmission, calculateAutofocus, selectedDate, setSelectedDate, patientData,
             formActivePanelChanged, setFormActivePanelChanged, formActivePanel, setFormActivePanel, createNewPatient, createNewPatientName, setCreateNewPatient  };
};

export default useConsultationProcess;