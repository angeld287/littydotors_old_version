import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import usePatientHistory from "./usePatientHistory"
import NonPathological from "./NonPathological";
import Pathological from "./Pathological";
import Family from "./Family";
import PathologicalHistory from './EditPatientHistory/PathologicalHistory';


const PatientHistory = ({
    global: global,
    setGlobalData: setGlobalData,
    patientHistory: patientHistory
}) => {
  //const { data } = usePatientHistory(global, setGlobalData);
  const [ editPath, setEditPath ] = useState(false);
  const [ lb_editpath, setLb_editpath ] = useState(false);

  //const object = (global.patient.patientHistory === null || global.patient.patientHistory === undefined) ? data : global.patient.patientHistory;

	if (global.patient.patientHistory === null || global.patient.patientHistory === undefined) return (<MDBContainer><MDBBox display="flex" justifyContent="center" className="mt-5"><MDBSpinner big/></MDBBox></MDBContainer>)
  
  const hasPatientHistory = (global.patient.patientHistory !== null && global.patient.patientHistory !== undefined);
  const hasPathological = (global.patient.patientHistory.pathologicalHistory !== null && global.patient.patientHistory.pathologicalHistory !== undefined);
  const hasNonPathological = (global.patient.patientHistory.nonPathologicalHistory !== null && global.patient.patientHistory.nonPathologicalHistory !== undefined);
  const hasFamilyHistory = (global.patient.patientHistory.familyHistory !== null && global.patient.patientHistory.familyHistory !== undefined);


  const editP = () =>{
    setEditPath(!editPath);
  }

  
  return (
      <div>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
                {(hasPatientHistory && hasPathological) && !editPath &&
                  <MDBContainer>
                    <MDBBtn onClick={editP} disabled={editPath} className="btn btn-primary btn-sm">
                        {!lb_editpath && <MDBIcon icon="edit" size="2x"/>}
                        {lb_editpath && 
                          <div className="spinner-border spinner-border-sm" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        }
                    </MDBBtn>
                    <Pathological data={global.patient.patientHistory.pathologicalHistory} pathological={patientHistory.pathologicalHistory}/>
                  </MDBContainer>
                }
                {(hasPatientHistory && hasPathological) && editPath &&
                    <MDBContainer>
                      <PathologicalHistory 
                        global={global}
                        editP={editP}
                        lb_editpath={lb_editpath}
                        setGlobalData={setGlobalData}
                      />
                    </MDBContainer>
                }
              </MDBCard>
            </MDBCol>
          </MDBRow>
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales No Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
                {(hasPatientHistory && hasNonPathological) &&
                  <NonPathological global={global} setGlobalData={setGlobalData}/>
                }
              </MDBCard>
            </MDBCol>
          </MDBRow>
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Familiares</strong>
        </h5>
        <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
                {(hasPatientHistory && hasFamilyHistory) &&
                  <Family global={global} setGlobalData={setGlobalData}/>
                }
              </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
      </div>
  );
}

export default PatientHistory;