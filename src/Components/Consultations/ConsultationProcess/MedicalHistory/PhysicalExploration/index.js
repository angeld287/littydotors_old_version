import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import usePhysicalExploration from './usePhysicalExploration';
import NewPhysicalExploration from './NewPhysicalExploration';



const PhysicalExploration = ({
    global: global,
    setGlobalData: setGlobalData
}) => {
  const { actions } = usePhysicalExploration(global, setGlobalData);

  const medicalHistory = global.medicalConsultation.medicalHistory;

  const [ _new, setNew ] = useState( (medicalHistory === null) && (medicalHistory !== null ? (medicalHistory.physicalExploration !== null) : true));
  const [ _edit, setEdit ] = useState(false);

  useEffect(() => {
      let didCancel = false;

      const fetch = async () => {
          try {
            } catch (error) {
          }
      };

      fetch();

      return () => {
          didCancel = true;
      };
  }, []);


  return (
    <MDBContainer>
      {/* Crear Datos de Exploracion Fisica */}
      {(_new && !_edit)&&
          <NewPhysicalExploration
              global={global}
              setGlobalData={setGlobalData}
              actions={actions}
          />
      }

      {/* Mostrar Datos de Exploracion Fisica */}
      {(!_new && !_edit)&&
          <div className="form-group">
            <label htmlFor="general_exploration">Show</label>
          </div>
      }

      {/* Editar Datos de Exploracion Fisica */}
      {(!_new && _edit)&&
          <div className="form-group">
            <label htmlFor="general_exploration">Edit</label>
          </div>
      }
      
    </MDBContainer>
  );
}

export default PhysicalExploration;