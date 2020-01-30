import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listMedicines, listAllergys, listSurgicalInterventions, listDiseases } from '../../../../../../graphql/queries';

const useNewPatientHistory = (childProps, patientData, global, setGlobalData) => {
    const [ loading, setLoading ] = useState(false);
    const [ loadingButton, setLoadingButton ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ name, setName ] = useState(null);
    const [ birthdate, setBirthdate ] = useState(new Date());
    const { register, handleSubmit, errors, formState } = useForm();

	const [ patientMedications, setPatientMedications ] = useState([]);
	const [ patientAllergies, setPatientAllergies ] = useState([]);
	const [ patientSurgicalInterventions, setPatientSurgicalInterventions ] = useState([]);
	const [ fatherDiseases, setFatherDiseases ] = useState([]);
	const [ motherDiseases, setMotherDiseases ] = useState([]);
	const [ brothersDiseases, setBrothersDiseases ] = useState([]);
	const [ grandfatherDiseases, setGrandfatherDiseases ] = useState([]);
	const [ grandmotherDiseases, setGrandmotherDiseases ] = useState([]);
	const [ otherDiseases, setOtherDiseases ] = useState([]);
	const [ api, setApi ] = useState([]);


    useEffect(() => {
        let didCancel = false;
		let api = {};


        const fetch = async () => {
            try {
				const _medications = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));
				const _allergies = await API.graphql(graphqlOperation(listAllergys, {limit: 400}));
				const _surgicalinterventions = await API.graphql(graphqlOperation(listSurgicalInterventions, {limit: 400}));
				const _diseases = await API.graphql(graphqlOperation(listDiseases, {limit: 400}));

                api = {
					medications: _medications.data.listMedicines.items,
                    allergies: _allergies.data.listAllergys.items,
                    surgicalinterventions: _surgicalinterventions.data.listSurgicalInterventions.items,
                    diseases: _diseases.data.listDiseases.items
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

    const onSubmit = (i) => {
        console.log(patientMedications);
        
    }

    return { loadingButton, onSubmit, setPatientAllergies, setPatientMedications, api, handleSubmit, formState, 
             setPatientSurgicalInterventions, setFatherDiseases, setMotherDiseases, setBrothersDiseases, setGrandfatherDiseases,
             setGrandmotherDiseases, setOtherDiseases };
    
};

export default useNewPatientHistory;