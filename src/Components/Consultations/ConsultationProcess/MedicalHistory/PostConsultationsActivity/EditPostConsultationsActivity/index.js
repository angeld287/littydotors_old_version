import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

const EditPostConsultationsActivity = ({
    fields: fields,
    editLoading: editLoading,
    api : api,
}) => {

  useEffect(() => {
      let didCancel = false;

      const fetch = async () => {   
      };

      fetch();

      return () => {
          didCancel = true;
      };
  }, []);

  return (
    <MDBContainer>
          <div className="form-group">
            <label htmlFor="general_exploration">Editar</label>
          </div>
          <div className="text-center py-4 mt-3">
              {!editLoading && <MDBBtn className="btn btn-outline-blue"  >Guardar</MDBBtn>}
              {editLoading && <MDBSpinner small />}
					</div>
    </MDBContainer>
  );
}

export default EditPostConsultationsActivity;