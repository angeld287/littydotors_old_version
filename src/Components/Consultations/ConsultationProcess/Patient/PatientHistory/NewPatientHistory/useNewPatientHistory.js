import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { listMedicines, listCategorys, listAllergys, listSurgicalInterventions, listDiseases } from '../../../../../../graphql/queries';

import { 
        createPathologicalHistory, 
        createFamilyHistory, 
        createFamilyDetailsDiseases, 
        createPatientMedications,
        createPathologicalHistorySurgicalInt, 
        createPatientAllergies,
        createPatientHistory,
        createNonPathologicalHistory,
        updatePatient,
    } from '../../../../../../graphql/mutations';

import { updatePatientaddPatientHistory } from '../../../../../../graphql/custom-mutations';

import usePatientHistory from '../usePatientHistory';

import { MDBBtn, MDBIcon } from 'mdbreact';
import Swal from 'sweetalert2';

const useNewPatientHistory = (global, setGlobalData, setHasPatientHistory, setPatientHistory) => {
    const [ loading, setLoading ] = useState(false);
    const [ loadingButton, setLoadingButton ] = useState(false);
    const [ error, setError ] = useState(false);
    const { register, handleSubmit, errors, formState } = useForm();

	const [ patientMedications, setPatientMedications ] = useState([]);
	const [ patientAllergies, setPatientAllergies ] = useState([]);
	const [ patientSurgicalInterventions, setPatientSurgicalInterventions ] = useState([]);
	const [ edit, setEdit ] = useState(false);
	const [ api, setApi ] = useState([]);

	const [ family, setFamily ] = useState([]);
	const [ familyTable, setFamilyTable ] = useState([]);
	const [ familyModal, setFamilyModal ] = useState(false);
	const [ familyEditObject, setFamilyEditObject ] = useState({});

    const [ nonPath, setNonPath ] = useState([]);
	const [ nonPathTable, setNonPathTable ] = useState([]);
	const [ nonPathModal, setNonPathModal ] = useState(false);
	const [ nonPathEditObject, setNonPathEditObject ] = useState({});

    const [ medication, setMedication ] = useState([]);
	const [ medicationTable, setMedicationTable ] = useState([]);
	const [ medicationModal, setMedicationModal ] = useState(false);
	const [ medicationEditObject, setMedicationEditObject ] = useState({});

    const { setData, setTest, test } = usePatientHistory();

    useEffect(() => {
        let didCancel = false;
		let api = {};

        const fetch = async () => {
            
            try {
				const _medications = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));
				const _allergies = await API.graphql(graphqlOperation(listAllergys, {limit: 400}));
				const _surgicalinterventions = await API.graphql(graphqlOperation(listSurgicalInterventions, {limit: 400}));
				const _diseases = await API.graphql(graphqlOperation(listDiseases, {limit: 400}));
				const _nonpath = await API.graphql(graphqlOperation(listCategorys, {limit: 400}, {filter: { or: [{module: {eq: "NonPathFrequency"}}, {module: {eq: "NonPathType"}}, {module: {eq: "FamilyHistory"}}]}} ));                

                api = {
					medications: _medications.data.listMedicines.items,
                    allergies: _allergies.data.listAllergys.items,
                    surgicalinterventions: _surgicalinterventions.data.listSurgicalInterventions.items,
                    diseases: _diseases.data.listDiseases.items,
                    nonpathfrequencies: _nonpath.data.listCategorys.items.filter(x => x.module === "NonPathFrequency"),
                    nonpathtypes: _nonpath.data.listCategorys.items.filter(x => x.module === "NonPathType"),
                    familytypes: _nonpath.data.listCategorys.items.filter(x => x.module === "FamilyHistory"),
                };

                setApi(api);
                createdFamily();
                createdNonPath();
                createdMedication();
                global.patientHistory = {
                    notEmpty: true,
                    api: api,
                    family: {
                        items: [],
                        table: [],
                    },
                    nonPath: {
                        items: [],
                        table: [],
                    }
                };
                
                setGlobalData(global);
                setLoadingButton(false);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                setLoadingButton(false);
            }
        };

        if(global.patientHistory.notEmpty !== true){
            setLoadingButton(true);
            setLoading(true);
            fetch();
        }else{
            setLoading(true);
            setApi(global.patientHistory.api);
            setFamily(global.patientHistory.family.items);
            setFamilyTable(global.patientHistory.family.table);
            setNonPath(global.patientHistory.nonPath.items);
            setNonPathTable(global.patientHistory.nonPath.table);
            setLoading(false);
        }

        return () => {
            didCancel = true;
        };
    }, []);


    /**
    * Description:
    *
    * Funciones Requeridas para la Gestion de Datos de antecedentes No Patologicos.
    * 
    */

    const toggleNonPath = () => {
        setNonPathModal(!nonPathModal)
        setEdit(false);
    }

    const createdNonPath = () => {
		var formated = [];
		nonPath.forEach((item) => {
			formated.push({
				type: item.type.label,
				frequency: item.frequency.label,
				options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeNonPath(item.id)}}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); openNonPathModalToEdit(item)}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
			});
		});

        const _nonpath = {
			columns: [ { label: 'Tipo', field: 'type', sort: 'asc' }, { label: 'Frecuencia', field: 'frequency', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};

        setNonPathTable(_nonpath);
        global.patientHistory.nonPath = {
            table: _nonpath,
            items: nonPath
        };

        setGlobalData(global);
	};

    const createNonPath = (o) => {
        const _items = nonPath;
        _items.push(o);        
        setNonPath(_items);
        createdNonPath();
    }

    const removeNonPath = async (id) => {
        const result = await Swal.fire({ title: '??Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
        if (result.value) {
            const _items = nonPath;
            _items.splice(_items.findIndex(v => v.id === id), 1);
            setNonPath(_items);
            createdNonPath();
        }
    }

    const openNonPathModalToEdit = (o) => {
        setEdit(true);
        setNonPathModal(true);
        setNonPathEditObject(o);
    }

    const editNonPath = (o) => {
        const _items = nonPath;

        _items.splice(_items.findIndex(v => v.id === o.id), 1);

        _items.push(o);
        setNonPath(_items);
        setEdit(false);
        createdNonPath();
    }


    /**
    * Description:
    *
    * Funciones Requeridas para la Gestion de Datos de antecedentes Familiares.
    * 
    */

    const toggleFamily = () => {
        setFamilyModal(!familyModal)
        setEdit(false);
    }

    const createdFamily = () => {
		var formated = [];
		family.forEach((item) => {
            var dItems = "";

            item.diseases.forEach((d) => {
                dItems = dItems+" - "+d.label;
            });
            
			formated.push({
				relationship: item.relationship.label,
				diseases: dItems,
				options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeFamily(item.id)}}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); openFamilyModalToEdit(item)}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
			});
		});
        const familytable = {
			columns: [ { label: 'Parentesco', field: 'relationship', sort: 'asc' }, { label: 'Enfermedades', field: 'diseases', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};
        setFamilyTable(familytable);
        global.patientHistory.family = {
            table: familytable,
            items: family
        };
        setGlobalData(global);
	};

    const createFamily = (o) => {
        const _items = family;
        _items.push(o);        
        setFamily(_items);
        createdFamily();
    }

    const removeFamily = async (id) => {
        const result = await Swal.fire({ title: '??Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
        if (result.value) {
            const _items = family;
            _items.splice(_items.findIndex(v => v.id === id), 1);
            setFamily(_items);
            createdFamily();
        }
    }

    const openFamilyModalToEdit = (o) => {
        setEdit(true);
        setFamilyModal(true);
        setFamilyEditObject(o);
    }

    const editFamily = (o) => {
        const _items = family;
        
        _items.splice(_items.findIndex(v => v.id === o.id), 1);

        _items.push(o);
        setFamily(_items);
        setEdit(false);
        createdFamily();
    }


    /**
    * Description:
    *
    * Funciones Requeridas para la Gestion de Datos de medicamentos.
    * 
    */

    const toggleMedication = () => {
        setMedicationModal(!medicationModal)
        setEdit(false);
    }

    const createdMedication = () => {
		var formated = [];
		medication.forEach((item) => {
			formated.push({
				medication: item.medication.label,
				drug_concentration: item.drug_concentration,
				options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeMedication(item.id)}}><MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); openMedicationModalToEdit(item)}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
			});
		});
        const medicationtable = {
			columns: [ { label: 'Medicamento', field: 'medication', sort: 'asc' }, { label: 'Concentracion', field: 'drug_concentration', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};
        setMedicationTable(medicationtable);
        global.patientHistory.medication = {
            table: medicationtable,
            items: medication
        };
        setGlobalData(global);
	};

    const createMedication = (o) => {
        const _items = medication;
        _items.push(o);        
        setMedication(_items);
        createdMedication();
    }

    const removeMedication = async (id) => {
        const result = await Swal.fire({ title: '??Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
        if (result.value) {
            const _items = medication;
            _items.splice(_items.findIndex(v => v.id === id), 1);
            setMedication(_items);
            createdMedication();
        }
    }

    const openMedicationModalToEdit = (o) => {
        setEdit(true);
        setMedicationModal(true);
        setMedicationEditObject(o);
    }

    const editMedication = (o) => {
        const _items = medication;

        _items.splice(_items.findIndex(v => v.patientMedicationsMedicationsId === o.patientMedicationsMedicationsId), 1);

        _items.push(o);
        setMedication(_items);
        setEdit(false);
        createdMedication();
    }




    /**
    * Description:
    *
    * Funciones para la creacion completa de la historia clinica
    * 
    */

    const onSubmit = async (i) => {  
        setLoadingButton(true);      
        global.patient.patientHistory = {
            pathologicalHistory : { patientMedications: patientMedications, patientAllergies: patientAllergies, surgicalInterventions: patientSurgicalInterventions },
            familyHistory : family,
            nonPathologicalHistory : nonPath 
        };                
        try {

            //PATHOLOGICAL
                const pathological = await API.graphql(graphqlOperation(createPathologicalHistory, { input: {  } })).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });

                medication.forEach(async (e) => {
                    const input = {
                        patientMedicationsPathologicalHistoryId: pathological.data.createPathologicalHistory.id,
                        patientMedicationsMedicationsId: e.medication.value
                    };
                    if(e.drug_concentration !== ""){input.drug_concentration = e.drug_concentration;}
                    const medications = await API.graphql(graphqlOperation(createPatientMedications, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                });

                patientAllergies.forEach(async (e) => {
                    const input = {
                        patientAllergiesPathologicalHistoryId: pathological.data.createPathologicalHistory.id,
                        patientAllergiesAllergiesId: e.id
                    };
                    const allergies = await API.graphql(graphqlOperation(createPatientAllergies, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                });

                patientSurgicalInterventions.forEach(async (e) => {
                    const input = {
                        pathologicalHistorySurgicalIntPathologicalHistoryId: pathological.data.createPathologicalHistory.id,
                        pathologicalHistorySurgicalIntSurgicalInterventionId: e.id
                    };
                    const surgery = await API.graphql(graphqlOperation(createPathologicalHistorySurgicalInt, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                });


            //PATIENT HISTORY
                const patienth = await API.graphql(graphqlOperation(createPatientHistory, {input: { patientHistoryPathologicalHistoryId: pathological.data.createPathologicalHistory.id}} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });

            //NON PATHOLOGICAL
                nonPath.forEach(async (e) => {
                    const input = {};

                    input.active = e.active;
                    input.frequency = e.frequency.label;
                    if(e.comment !== ""){input.comment = e.comment;}
                    input.patientHistoryNonPathologicalHistoryId = patienth.data.createPatientHistory.id;
                    input.nonPathologicalHistoryTypeId = e.type.value;

                    const npnpathological = await API.graphql(graphqlOperation(createNonPathologicalHistory, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                });

            //FAMILY

                family.forEach(async (e) => {
                    const input = {};

                    input.alive = e.alive;
                    if(e.comment !== ""){input.comment = e.comment;}
                    input.patientHistoryFamilyHistoryId = patienth.data.createPatientHistory.id;
                    input.familyHistoryRelationshipId = e.relationship.value;

                    const cfamilyh = await API.graphql(graphqlOperation(createFamilyHistory, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                    e.diseases.forEach(async (d) => {
                        const input = {
                            familyDetailsDiseasesFamilyId: cfamilyh.data.createFamilyHistory.id,
                            familyDetailsDiseasesDiseasesId: d.value,
                        };
                        const phdiseases = await API.graphql(graphqlOperation(createFamilyDetailsDiseases, {input: input} )).catch( e => { throw new SyntaxError("Error GraphQL"); console.log(e); });
                    });
                });

            //ADDING PATIENT HISTORY TO PATIENT TABLE
                setTimeout(() => {  
                        API.graphql(graphqlOperation(updatePatientaddPatientHistory, {input: {id: global.patient.id, patientPatientHistoryId: patienth.data.createPatientHistory.id}} ))
                        .then(async (r) => {                            
                            setData(r.data.updatePatient.patientHistory);
                            global.patient.patientHistory = r.data.updatePatient.patientHistory;
                            setGlobalData(global);
                            setPatientHistory(r.data.updatePatient.patientHistory);
                            setHasPatientHistory(true);
                            setLoadingButton(false);
			                await Swal.fire('Correcto', 'El elemento se ha creado correctamente', 'success');
                        })
                }, 2000);

		} catch (error) {
            setLoadingButton(false);
            console.log(error);
            
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde');
		}
    }

        const nonPathActions = {
            createNonPath: createNonPath, 
            toggleNonPath: toggleNonPath, 
            nonPathModal: nonPathModal, 
            nonPathTable: nonPathTable, 
            removeNonPath: removeNonPath,
            editNonPath: editNonPath,
            nonPathEditObject: nonPathEditObject, 
        };

        const familyActions = {
            createFamily: createFamily, 
            toggleFamily: toggleFamily, 
            familyModal: familyModal,
            familyTable: familyTable,
            removeFamily: removeFamily, 
            editFamily: editFamily, 
            familyEditObject: familyEditObject,
        };

        const medicationActions = {
            loadingButton: loadingButton, 
            edit: edit,
            createMedication: createMedication, 
            toggleMedication: toggleMedication, 
            medicationModal: medicationModal,
            medicationTable: medicationTable, 
            removeMedication: removeMedication, 
            editMedication: editMedication, 
            medicationEditObject: medicationEditObject
        };

    return { 
                onSubmit, 
                handleSubmit, 
                formState, 
                register, 
                errors, 

                api, 
                edit, 
                loadingButton, 

                setPatientAllergies, 
                setPatientMedications, 
                setPatientSurgicalInterventions, 
                
                nonPathActions,
                familyActions,
                medicationActions,
                loading,
            };
    
};

export default useNewPatientHistory;