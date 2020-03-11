import React, { useState, useEffect, Fragment } from 'react';
import Swal from 'sweetalert2';

import { API, graphqlOperation } from 'aws-amplify';

import { listMedicines, listCategorys, listAllergys, listSurgicalInterventions, listDiseases } from '../../../../../../../graphql/queries';

import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
    MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable, MDBModal } from "mdbreact";


const usePathologicalHistory = (setGlobalData, global) => {

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ loadingButton, setLoadingButton ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    const [ api, setApi ] = useState(false);

    const [ medication, setMedication ] = useState([]);
	const [ medicationTable, setMedicationTable ] = useState([]);
	const [ medicationModal, setMedicationModal ] = useState(false);
    const [ medicationEditObject, setMedicationEditObject ] = useState({});
    const [ lb_med, setlb_med ] = useState(false);

    useEffect(() => {
        let didCancel = false;
        let api = {};

        const fetch = async () => {            
            try {
				const _surgicalInterventions = await API.graphql(graphqlOperation(listSurgicalInterventions, {limit: 400}));
				const _allergies = await API.graphql(graphqlOperation(listAllergys, {limit: 400}));                
				const _medications = await API.graphql(graphqlOperation(listMedicines, {limit: 400}));                

                api = {
                    medications: _medications.data.listMedicines.items,
                    allergies: _allergies.data.listAllergys.items,
                    surgicalinterventions: _surgicalInterventions.data.listSurgicalInterventions.items,
                };

                setApi(api);
                //setList();
                
                setGlobalData(global);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        setLoading(true);
        fetch();

        return () => {
            didCancel = true;
        };

    }, []);


    //funciones de medicamentos
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
        const result = await Swal.fire({ title: '¿Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
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

    const medicationActions = {
        createMedication: createMedication, 
        toggleMedication: toggleMedication, 
        medicationModal: medicationModal,
        medicationTable: medicationTable, 
        removeMedication: removeMedication, 
        editMedication: editMedication, 
        medicationEditObject: medicationEditObject,
        lb_med: lb_med,
        setlb_med: setlb_med,
        openMedicationModalToEdit: openMedicationModalToEdit,

    };

    return { 
                api, 
                edit, 
                loadingButton, 
                loading,
                medicationActions,
     };
    
};

export default usePathologicalHistory;