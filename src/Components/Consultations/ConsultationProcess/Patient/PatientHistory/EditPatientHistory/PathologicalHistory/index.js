import React, { useState, Fragment, useEffect } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable, MDBModal } from "mdbreact";

import Select from 'react-select';

import Swal from 'sweetalert2';
import { API, graphqlOperation } from 'aws-amplify';

import usePathologicalHistory from './usePathologicalHistory';
import PatientMedications from './PatientMedications';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import { deletePatientMedications } from '../../../../../../../graphql/mutations';

const PathologicalHistory = (
                      {
                        global: global,
                        editP: editP,
                        lb_editpath: lb_editpath,
                        setPatientMedications: setPatientMedications,
                        setGlobalData: setGlobalData
                      } 
                   ) => {

      const { api, 
              medicationActions, 
              edit, 
              loadingButton, 
              loading,
              setPatientAllergies,
              setPatientSurgicalInterventions,
              medicationTable,
              setMedicationsList,
              
            } = usePathologicalHistory(setGlobalData, global);

  const [ allergiesToEdit, setAllergiesToEdit ] = useState([]);
  const [ surgicalInterventionsToEdit, setSurgicalInterventionsToEdit ] = useState([]);
  const [ medicationsToEdit, setMedicationsToEdit ] = useState([]);

  useEffect(() => {       
      setEditObjects();
      setMedicationsList();
  }, []);

  const _surgicalInterventions = [];
  if (api.surgicalinterventions !== undefined) {
    api.surgicalinterventions.forEach(element => {
      var item = {value: element.id, label: element.name};
      _surgicalInterventions.push(item);
    });
  }

  const _allergies = [];
  if (api.allergies !== undefined) {
    api.allergies.forEach(element => {
      var item = {value: element.id, label: element.name};
      _allergies.push(item);
    });
  }

  const setEditObjects = () =>{
    const _a = [];
    const _s = [];
    const _m = [];

    global.patient.patientHistory.pathologicalHistory.patientAllergies.items.forEach( e => {
        _a.push({value: e.allergies.id, label: e.allergies.name})
    });

    global.patient.patientHistory.pathologicalHistory.surgicalInterventions.items.forEach( e => {
        _s.push({value: e.surgicalIntervention.id, label: e.surgicalIntervention.name})
    });

    global.patient.patientHistory.pathologicalHistory.patientMedications.items.forEach( e => {
        _m.push({value: e.medications.id, label: e.medications.name})
    });

    setAllergiesToEdit(_a);
    setSurgicalInterventionsToEdit(_s);
    setMedicationsToEdit(_m);
  }
  
  const removeMedication = async (id) => {
    medicationActions.setlb_med(true);
      const result = await Swal.fire({ title: '¿Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
      if (result.value) {
          const _items = global.patient.patientHistory.pathologicalHistory.patientMedications.items;
          
          API.graphql(graphqlOperation(deletePatientMedications, {input: {id: id}} ));
          _items.splice(_items.findIndex(v => v.id === id), 1);

          global.patient.patientHistory.pathologicalHistory.patientMedications.items = _items;

          setGlobalData(global);
          
          setTimeout(() => {  
              setMedicationsList();
              medicationActions.setlb_med(false);   
          }, 2000);
      }
  }

  if (loading) {
    return (
      <MDBContainer>
        <MDBBox display="flex" justifyContent="center" className="mt-5">
          <MDBSpinner big />
        </MDBBox>
      </MDBContainer>
    );
  }
  
  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        <MDBCol>
            <label htmlFor="diseases" className="mt-2" >Medicamentos</label>
            <br/>
            <MDBContainer>
              <MDBBtn onClick={medicationActions.toggleMedication} disabled={medicationActions.loadingButton} className="btn btn-primary btn-sm">
                  {!medicationActions.lb_med && <MDBIcon icon="plus" size="2x" />}
                  {medicationActions.lb_med && 
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  }
              </MDBBtn>
              <MDBDataTable
                striped bordered searchLabel="Buscar"
                responsiveSm={true} small hover entries={5}
                btn={true} data={medicationTable} noRecordsFoundLabel="No se han encontrado datos"
                entriesLabel="Cantidad" entriesOptions={[ 5, 10 ]} infoLabel={[ '', '-', 'de', 'registros' ]}
                paginationLabel={[ 'Anterior', 'Siguiente' ]} noBottomColumns={true}
              />
            </MDBContainer>
            <MDBModal isOpen={medicationActions.medicationModal} toggle={medicationActions.toggleMedication} size="lg">
              <PatientMedications
                toggleMedication={medicationActions.toggleMedication}
                api={api}
                createMedication={medicationActions.createMedication}
                editMedication={medicationActions.editMedication}
                edit={medicationActions.edit}
                medicationEditObject={medicationActions.medicationEditObject}
              />
            </MDBModal>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBCol>
          <label htmlFor="diseases" className="mt-2" >Intervenciones Quirurgicas</label>
          {!loading && <Select isMulti id="surgincalinterventions" options={_surgicalInterventions} defaultValue={surgicalInterventionsToEdit} onChange={ (v) => {setPatientSurgicalInterventions(v)}}/>}
          {loading && 
              <div style={{marginLeft: 10}} className="spinner-border spinner-border-sm" role="status"></div>
          }
        </MDBCol>
        <MDBCol>
          <label htmlFor="diseases" className="mt-2" >Alergias</label>
          {!loading && <Select isMulti id="allergies" options={_allergies} defaultValue={allergiesToEdit} onChange={ (v) => {setPatientAllergies(v)}}/>}
          {loading && 
              <div style={{marginLeft: 10}} className="spinner-border spinner-border-sm" role="status"></div>
          }
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBBtn onClick={editP} disabled={lb_editpath} className="btn btn-primary btn-sm">
            {!lb_editpath && <MDBIcon icon="save" size="2x"/>}
            {lb_editpath && 
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
        </MDBBtn>
      </MDBRow>
    </MDBContainer>
  );
}

export default PathologicalHistory;