import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listMedicalAnalysiss, listSurgicalInterventions, listMedicines } from '../../../../../graphql/queries';
import { MDBBtn } from 'mdbreact';

const useNewMedicalPrescription = () => {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ modal, setModal ] = useState(false);
    let { consultation, patient } = useParams();
    const { register, handleSubmit, errors, formState } = useForm();


	const [ medicalAnalysis, setMedicalAnalysis ] = useState([]);
	const [ surgicalIntervention, setSurgicalIntervention ] = useState([]);
	const [ items, setItems ] = useState([]);
	const [ prescriptionMedication, setPrescriptionMedication ] = useState([]);
	const [ api, setApi ] = useState([]);



    useEffect(() => {
        let didCancel = false;
		let api = {};

        const fetch = async () => {
            try {
				const _medicalanalysis = await API.graphql(graphqlOperation(listMedicalAnalysiss, {limit: 400}));
				const _surgicalintervention = await API.graphql(graphqlOperation(listSurgicalInterventions, {limit: 400}));
				const _medications = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));

                
                api = {
					medicalanalysis: _medicalanalysis.data.listMedicalAnalysiss.items,
					surgicalintervention: _surgicalintervention.data.listSurgicalInterventions.items,
                    prescriptionmedications: _medications.data.listMedicines.items
                };
                
                setApi(api);
                /* API.graphql(graphqlOperation(createMedicalHistory, {input: input}))
                .then((r) => {
                    
                }).catch((err) => { 
                    console.log("Ocurrio un error: ",err); 
                    setError(true) 
                    setLoading(false);
                });  */
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        fetch();

        return () => {
            didCancel = true;
        };
    }, []);

    const createMedicalPrescription = (o) => {
        const _items = items;
        _items.push(o);
        setItems(_items);
    }

    const onSubmit = (i) => {
            console.log(i);
            
    }

    return { createMedicalPrescription, setPrescriptionMedication, modal, setModal, items, register, loading, handleSubmit, onSubmit, formState, api, setMedicalAnalysis, setSurgicalIntervention };
};

export default useNewMedicalPrescription;