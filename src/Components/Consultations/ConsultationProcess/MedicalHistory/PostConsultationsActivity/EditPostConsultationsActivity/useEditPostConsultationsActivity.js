import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import useForm from 'react-hook-form';
import { deletePostConsultActSurgicalInt, createPostConsultActSurgicalInt, createPostConsultActMedAnalysis, deletePostConsultActMedAnalysis } from '../../../../../../graphql/mutations';
import { updateMedicalConsultationForPCAGlobal } from '../../../../../../graphql/custom-mutations';
import { MDBBtn, MDBIcon } from 'mdbreact';
import Swal from 'sweetalert2';

const useEditPostConsultationsActivity = (global, setGlobalData, _setEdit) => {
    const [ loading, setLoading ] = useState(false);
    const [ loadingButton, setLoadingButton ] = useState(false);
    const [ editLoading, setEditLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    let { consultation, patient } = useParams();
    const { register, handleSubmit, errors, formState } = useForm();

    const [ medicalanalysis, setMedicalanalysis ] = useState([]);
    const [ surgicalinterventions, setSurgicalinterventions ] = useState([]);
    const [ prescriptionMedication, setPrescriptionMedication ] = useState([]);
    const [ api, setApi ] = useState([]);

    const [ items, setItems ] = useState(global.medicalConsultation.postConsultationsActivity.medicalpres.items);
    const [ table, setTable ] = useState([]);
    const [ modal, setModal ] = useState(false);
    const [ editObject, setEditObject ] = useState({});

  const postConsultationsActivity = global.medicalConsultation.postConsultationsActivity;


    useEffect(() => {
        createdPrescriptions();
    }, []);

    const toggle = () => {
        setModal(!modal);
        setEdit(false);
    };

    const createdPrescriptions = () => {
        var formated = [];
        items.forEach((item) => {
            formated.push({
                medicationName: item.medications.name,
                frequency: item.frequency === null ? "N/A" : item.frequency,
                options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeMedicalPrescription(item.medicalPrescriptionMedicationsId)}}><MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); openModalToEdit(item)}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
            });
        });
        const _table = {
            columns: [{label: 'Medicamento', field: 'medicationName', sort: 'asc'}, {label: 'Frecuencia', field: 'frequency', sort: 'asc'}, {label: 'Opciones', field: 'options', sort: 'disabled'} ],
            rows: formated
        };

        setTable(_table);
        global.medicalHistory.postConsultationActivities.medicalPrescriptions = {
            table: _table,
            items: items
        };

        setGlobalData(global);
    };
    

    const _createMedicalPrescription = (o) => {
        const _items = items;
        _items.push(o);
        setItems(_items);
        createdPrescriptions();
    }

    const removeMedicalPrescription = async (id) => {
        const result = await Swal.fire({
            title: '¿Desea eliminar el elemento?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.value) {
            const _items = items;
            _items.splice(_items.findIndex(v => v.imedicalPrescriptionMedicationsId === id), 1);
            setItems(_items);
            createdPrescriptions();
        }
    }

    const openModalToEdit = (o) => {
        setEdit(true);
        setModal(true);
        setEditObject(o);
    }

    const setViewObjects = () =>{
        const _a = [];
        const _s = [];
    
        postConsultationsActivity.medicalAnalysis.items.forEach( e => {
            _a.push({value: e.medicalAnalysis.id, label: e.medicalAnalysis.name})
        });
    
        postConsultationsActivity.surgicalIntervention.items.forEach( e => {
            _s.push({value: e.surgicalIntervention.id, label: e.surgicalIntervention.name})
        });
    
        setMedicalanalysis(_a);
        setSurgicalinterventions(_s);
      }

    const editMedicalPrescription = (o) => {

        const _items = items;

        _items.splice(_items.findIndex(v => v.imedicalPrescriptionMedicationsId === o.medicalPrescriptionMedicationsId), 1);

        _items.push(o);
        setItems(_items);
        setEdit(false);
        createdPrescriptions();
    }

    const editPCActivities = () => {
        setEditLoading(true);
        const _itemsS = postConsultationsActivity.surgicalIntervention.items;
        const _itemsA = postConsultationsActivity.medicalAnalysis.items;
          
        _itemsS.forEach( async (e) => {
            const sIndex = surgicalinterventions === null ? -1 : surgicalinterventions.findIndex(x => x.value === e.surgicalIntervention.id);
            if(sIndex === -1){
                const deletedS = await API.graphql(graphqlOperation(deletePostConsultActSurgicalInt, {input: {id: e.id}} )).catch( e => { console.log(e); setEditLoading(false);  throw new SyntaxError("Error GraphQL"); });
                _itemsS.splice(_itemsS.findIndex(v => v.id === e.id), 1);
            }
        });
        if (surgicalinterventions !== null) {
            surgicalinterventions.forEach(async (e) => {
                const sIndex = _itemsS.findIndex(x => x.surgicalIntervention.id === e.value);
                if(sIndex === -1){
                    const input = {
                        postConsultActSurgicalIntPcActivitiesId: postConsultationsActivity.id,
                        postConsultActSurgicalIntSurgicalInterventionId: e.value
                    };
                    const surgery = await API.graphql(graphqlOperation(createPostConsultActSurgicalInt, {input: input} )).catch( e => { console.log(e); setEditLoading(false);  throw new SyntaxError("Error GraphQL"); });
                    const _surgicalIntervention = surgery.data.createPostConsultActSurgicalInt;
                    _itemsS.push(_surgicalIntervention);                    
                }
            });
        }
        global.medicalConsultation.postConsultationsActivity.surgicalIntervention.items = _itemsS;

        _itemsA.forEach( async (e) => {
            const aIndex = medicalanalysis === null ? -1 : medicalanalysis.findIndex(x => x.value === e.medicalAnalysis.id);
            if(aIndex === -1){
                const deletedS = await API.graphql(graphqlOperation(deletePostConsultActMedAnalysis, {input: {id: e.id}} )).catch( e => { console.log(e); setEditLoading(false);  throw new SyntaxError("Error GraphQL"); });
                _itemsA.splice(_itemsA.findIndex(v => v.id === e.id), 1);
            }
        });

        if (medicalanalysis !== null) {
            medicalanalysis.forEach(async (e) => {
                const aIndex = _itemsA.findIndex(x => x.medicalAnalysis.id === e.value);
                if(aIndex === -1){
                    const input = {
                        postConsultActMedAnalysisPcActivitiesId: postConsultationsActivity.id,
                        postConsultActMedAnalysisMedicalAnalysisId: e.value,
                    };
                    const surgery = await API.graphql(graphqlOperation(createPostConsultActMedAnalysis, {input: input} )).catch( e => { console.log(e); setEditLoading(false);  throw new SyntaxError("Error GraphQL"); });
                    const _surgicalIntervention = surgery.data.createPostConsultActMedAnalysis;
                    _itemsA.push(_surgicalIntervention);                    
                }
            });
        }
        
        global.medicalConsultation.postConsultationsActivity.medicalAnalysis.items = _itemsA;

        setTimeout(() => {  
            _setEdit(false)
            setEditLoading(false); 
        }, 2000);
        
    }    

    return { editPCActivities, editObject, edit, toggle, table, loadingButton, editMedicalPrescription, removeMedicalPrescription, _createMedicalPrescription, 
            setPrescriptionMedication, modal, setModal, items, register, loading, handleSubmit, formState, api, setViewObjects, 
            medicalanalysis, surgicalinterventions, setSurgicalinterventions, setMedicalanalysis, editLoading };
};

export default useEditPostConsultationsActivity;
