import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useViewPostConsultationsActivity from './useViewPostConsultationsActivity';

const ViewPostConsultationsActivity = ({
    global: global,
    setGlobalData: setGlobalData,
    setEdit: setEdit,
    editLoading: editLoading,
    api : api,
}) => {
  //const { register, loading, handleSubmit, onSubmit, formState } = usePhysicalExploration(global, setGlobalData);

  const editData = () => {
    setEdit(true);
  }

  const { table } = useViewPostConsultationsActivity(global, setGlobalData);
  const physicalexploration = global.medicalConsultation.medicalHistory.physicalExploration;


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
          <div className="text-center py-4 mt-3">
              {!editLoading && <MDBBtn className="btn btn-outline-blue" disabled={false} onClick={editData}>Editar</MDBBtn>}
              {editLoading && <MDBSpinner small />}
					</div>
    </MDBContainer>
  );
}

export default ViewPostConsultationsActivity;