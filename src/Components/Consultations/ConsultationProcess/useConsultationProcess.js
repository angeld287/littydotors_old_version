import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router-dom';

const useConsultationProcess = () => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ createNewPatient, setCreateNewPatient ] = useState(false);
    const [ createNewPatientName, setCreateNewPatientName ] = useState("");
    const [ formActivePanelChanged, setFormActivePanelChanged ] = useState(false);
    const [ formActivePanel, setFormActivePanel ] = useState(0);
    const [ selectedDate, setSelectedDate ] = useState(new Date());

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

    useEffect(() => {
        let didCancel = false;

        const createMedicalConsultation = async () => {

            try {
                setFormActivePanel(1);
                
                if (consultation === "null") {
                    setCreateNewPatient(true);
                    setCreateNewPatientName(patient);
                }
            } catch (error) {
                setLoading(false);
                setError(true);
            }

            if (!didCancel) {
                setLoading(false);
            }
        };

        createMedicalConsultation();

        return () => {
            didCancel = true;
        };
    }, []);

    return { error, loading, swapFormActive, handleNextPrevClick, handleSubmission, calculateAutofocus, selectedDate, setSelectedDate,
             formActivePanelChanged, setFormActivePanelChanged, formActivePanel, setFormActivePanel, createNewPatient, createNewPatientName, setCreateNewPatient  };
};

export default useConsultationProcess;