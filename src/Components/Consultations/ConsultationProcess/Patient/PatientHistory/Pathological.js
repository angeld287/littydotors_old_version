import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

import usePatientHistory from  './usePatientHistory';

const Pathological = ({
    data: data,
    pathological: pathological
}) => {
   
	const [ medications, setMedications ] = useState([]);
	const [ allergies, setAllergies ] = useState([]);
	const [ surgicalInterventions, setSurgicalInterventions ] = useState([]);
  const { test } = usePatientHistory();

  useEffect(() => {
      setLists();
  }, []);

  const setLists = () => {
		var surgical = [];
		var medicines = [];
		var allergies = [];

    if (data.surgicalInterventions !== null && data.surgicalInterventions !== undefined) {
      data.surgicalInterventions.items.forEach((item) => {
        surgical.push({
          name: item.surgicalIntervention.name,
        });
      });
    }else{
      console.log(pathological);
    }
		
    if (data.patientMedications !== null && data.patientMedications !== undefined) {
      data.patientMedications.items.forEach((item) => {
        medicines.push({
          name: item.medications.name,
        });
      });
    }else{
      console.log(pathological);
    }


    if (data.patientAllergies !== null && data.patientAllergies !== undefined) {
      data.patientAllergies.items.forEach((item) => {
        allergies.push({
          name: item.allergies.name,
        });
      });
    }else{
      console.log(pathological);
    }

    setSurgicalInterventions(surgical);
    setMedications(medicines);
    setAllergies(allergies);
	};

  const _surgical = [ { label: 'Intervencion', field: 'name', sort: 'asc' }];
  const _medications = [ { label: 'Medicamentos', field: 'name', sort: 'asc' }];
  const _allergies = [ { label: 'Alergias', field: 'name', sort: 'asc' }];


  return (
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol>
            <MDBContainer>
                <MDBTable>
                  <MDBTableHead columns={_allergies} />
                  <MDBTableBody rows={allergies} />
                </MDBTable>
            </MDBContainer>
          </MDBCol>
          <MDBCol>
            <MDBContainer>
                <MDBTable>
                  <MDBTableHead columns={_medications} />
                  <MDBTableBody rows={medications} />
                </MDBTable>
            </MDBContainer>
          </MDBCol>
          <MDBCol>
            <MDBContainer>
                <MDBTable>
                  <MDBTableHead columns={_surgical} />
                  <MDBTableBody rows={surgicalInterventions} />
                </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}

export default Pathological;