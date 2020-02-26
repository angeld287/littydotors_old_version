import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useEditPatientHistory from './EditPatientHistory/useEditPatientHistory';
import FamilyHistory from './EditPatientHistory/FamilyHistory';


const Family = ({
    global: global,
    setGlobalData: setGlobalData,
}) => {

	const [ table, setTable ] = useState([]);
  const { familyActions, api, edit } = useEditPatientHistory(global);
  const data = global.patient.patientHistory.familyHistory;

  useEffect(() => {
      if (data.items !== undefined && data.items !== null) {
        setList();
      }
  }, []);

  const setList = () => {
		var formated = [];

		data.items.forEach((item) => {
            var dItems = null;
            item.diseases.items.forEach((d) => {
                dItems = dItems+" - "+d.diseases.name;
            });
            
			formated.push({
				relationship: item.relationship.name,
				diseases: dItems,
				options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); /* removeFamily(item.id) */}}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); /* openFamilyModalToEdit(item) */}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
			});
		});

    const familytable = {
			columns: [ { label: 'Parentesco', field: 'relationship', sort: 'asc' }, { label: 'Enfermedades', field: 'diseases', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};

    setTable(familytable);
	};

  return (
      <MDBContainer>
          <br/>
          <MDBContainer>
            <MDBBtn onClick={familyActions.toggleFamily} disabled={familyActions.loadingButton} className="btn btn-primary btn-sm">
                {!familyActions.lb_family && "Crear Antecedente Familiar"}
                {familyActions.lb_family && 
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }
            </MDBBtn>
            <MDBDataTable
              striped bordered searchLabel="Buscar"
              responsiveSm={true} small hover entries={5}
              btn={true} data={table} noRecordsFoundLabel="No se han encontrado datos"
              entriesLabel="Cantidad" entriesOptions={[ 5, 10 ]} infoLabel={[ '', '-', 'de', 'registros' ]}
              paginationLabel={[ 'Anterior', 'Siguiente' ]} noBottomColumns={true}
            />
          </MDBContainer>
          <MDBModal isOpen={familyActions.familyModal} toggle={familyActions.toggleFamily} size="lg">
            <FamilyHistory 
              toggleFamily={familyActions.toggleFamily}
              familyActions={familyActions}
              api={api}
              createFamily={familyActions.createFamily}
              editFamily={familyActions.editFamily}
              edit={edit}
              familyEditObject={familyActions.familyEditObject}
              global={global}
              setGlobalData={setGlobalData}
              setList={setList}
            />
          </MDBModal>
      </MDBContainer>
  );
}

export default Family;