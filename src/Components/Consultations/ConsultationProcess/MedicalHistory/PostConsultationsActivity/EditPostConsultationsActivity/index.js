import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import Select from 'react-select';

import useEditPostConsultationsActivity from './useEditPostConsultationsActivity';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const EditPostConsultationsActivity = ({
    global: global,
    setGlobalData: setGlobalData,
    setEdit: setEdit,
    editLoading: editLoading,
    api : api,
}) => {
  //const { register, loading, handleSubmit, onSubmit, formState } = usePhysicalExploration(global, setGlobalData);

  const { table, editPCActivities } = useEditPostConsultationsActivity(global, setGlobalData);

  const [ loading, setloading ] = useState([]);
  const [ medicalanalysis, setMedicalanalysis ] = useState([]);
  const [ surgicalinterventions, setSurgicalinterventions ] = useState([]);
  const [ maoptions, setmaoptions ] = useState([]);
  const [ sioptions, setsioptions ] = useState([]);

  const medicalConsultation = global.medicalConsultation.postConsultationsActivity;

  useEffect(() => {
    setloading(true);
    setViewObjects();
    setOptions();
    setloading(false);
  }, []);

  const setViewObjects = () =>{
    const _a = [];
    const _s = [];

    medicalConsultation.medicalAnalysis.items.forEach( e => {
        _a.push({value: e.medicalAnalysis.id, label: e.medicalAnalysis.name})
    });

    medicalConsultation.surgicalIntervention.items.forEach( e => {
        _s.push({value: e.surgicalIntervention.id, label: e.surgicalIntervention.name})
    });

    setMedicalanalysis(_a);
    setSurgicalinterventions(_s);
  }

  const setOptions = () =>{
    const _a = [];
    const _s = [];

    if (api.medicalanalysis !== undefined) {
      api.medicalanalysis.forEach( e => {
          _a.push({value: e.id, label: e.name})
      });
    }
    if (api.surgicalintervention !== undefined) {
      api.surgicalintervention.forEach( e => {
          _s.push({value: e.id, label: e.name})
      });
    }

    setmaoptions(_a);
    setsioptions(_s);   
  }

  return (
    <MDBContainer>
          <h6 className="text-center font-weight-bold pt-5 pb-3 mb-2"><strong>Prescripciones Medicas</strong></h6>
          <MDBRow className="mb-3">
          <MDBCol>
            <MDBDataTable
              striped bordered searchLabel="Buscar"
              responsiveSm={true} small hover entries={5}
              btn={true} data={table} noRecordsFoundLabel="No se han encontrado datos"
              entriesLabel="Cantidad" entriesOptions={[ 5, 10 ]} infoLabel={[ '', '-', 'de', 'registros' ]}
              paginationLabel={[ 'Anterior', 'Siguiente' ]} noBottomColumns={true}
            />
          </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol>
              <label htmlFor="medicalanalysis" className="mt-2" >Analisis Medicos</label>
              {!loading && <Select isDisabled={true} isMulti id="medicalanalysis" options={maoptions} defaultValue={medicalanalysis}/>}
              {loading && <div style={{marginLeft: 10}} className="spinner-border spinner-border-sm" role="status"></div>}
            </MDBCol>
            <MDBCol>
              <label htmlFor="surgicalinterventions" className="mt-2" >Intervenciones Quirurgicas</label>
              {!loading && <Select isDisabled={true} isMulti id="surgicalinterventions" options={sioptions} defaultValue={surgicalinterventions}/>}
              {loading && <div style={{marginLeft: 10}} className="spinner-border spinner-border-sm" role="status"></div>}
            </MDBCol>
          </MDBRow>
          <div className="text-center py-4 mt-3">
              {!editLoading && <MDBBtn className="btn btn-outline-blue" disabled={false} onClick={editPCActivities}><MDBIcon size="2x" icon="edit" className="blue-text" /></MDBBtn>}
              {editLoading && <MDBSpinner small />}
					</div>
    </MDBContainer>
  );
}

export default EditPostConsultationsActivity;