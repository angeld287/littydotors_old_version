import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

const ViewPostConsultationsActivity = ({
    global: global,
    setEdit: setEdit,
    editLoading: editLoading,
}) => {
  //const { register, loading, handleSubmit, onSubmit, formState } = usePhysicalExploration(global, setGlobalData);

  const editData = () => {
    setEdit(true);
  }
  const physicalexploration = global.medicalConsultation.medicalHistory.physicalExploration;


  return (
    <MDBContainer>
          <div className="form-group">
            <label htmlFor="general_exploration">Ver</label>
          </div>
          <div className="text-center py-4 mt-3">
              {!editLoading && <MDBBtn className="btn btn-outline-blue" disabled={false} onClick={editData}>Editar</MDBBtn>}
              {editLoading && <MDBSpinner small />}
					</div>
    </MDBContainer>
  );
}

export default ViewPostConsultationsActivity;