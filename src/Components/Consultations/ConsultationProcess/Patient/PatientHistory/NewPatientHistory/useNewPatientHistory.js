import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listMedicines, listAllergys, listSurgicalInterventions, listDiseases } from '../../../../../../graphql/queries';

const useNewPatientHistory = (global, setGlobalData) => {
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
        global.patient.patientHistory = {
            pathologicalHistory : { 
                patientMedications: patientMedications,
                patientAllergies: patientAllergies,
                surgicalInterventions: patientSurgicalInterventions,
            },
            familyHistory : {
                father: {
                    alive: i.father_alive,
                    diseases: fatherDiseases,
                    comment: i.father_comment,
                },
                mother: {
                    alive: i.mother_alive,
                    diseases: motherDiseases,
                    comment: i.mother_comment,
                },
                brothers: {
                    alive: i.brother_alive,
                    diseases: brothersDiseases,
                    comment: i.brother_comment,
                },
                grandfather: {
                    alive: i.gmother_alive,
                    diseases: grandfatherDiseases,
                    comment: i.gmother_comment,
                },
                grandmother: {
                    alive: i.father_alive,
                    diseases: grandmotherDiseases,
                    comment: i.father_comment,
                },
                other: {
                    alive: i.other_alive,
                    diseases: otherDiseases,
                    comment: i.other_comment,
                }
            },
            nonPathologicalHistory : {
                alcohol: {
                    active: i.alcohol,
                    frequency: i.alcohol_frequency,
                    comment: i.alcohol_comment,
                },
                smoking: {
                    active: i.smoking,
                    frequency: i.smoking_frequency,
                    comment: i.smoking_comment,
                },
                drugs: {
                    active: i.drugs,
                    frequency: i.drugs_frequency,
                    comment: i.drugs_comment,
                },
                immunizations: {
                    active: i.immunizations,
                    frequency: i.immunizations_frequency,
                    comment: i.immunizations_comment,
                },
            }
        };
        setGlobalData(global);  
        console.log(global);
             
    }

    return { loadingButton, onSubmit, setPatientAllergies, setPatientMedications, api, handleSubmit, formState, register,
             setPatientSurgicalInterventions, setFatherDiseases, setMotherDiseases, setBrothersDiseases, setGrandfatherDiseases,
             setGrandmotherDiseases, setOtherDiseases, errors };
    
};

export default useNewPatientHistory;