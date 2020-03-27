import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import { deleteFamilyHistory } from '../../../../../graphql/mutations';

import { API, graphqlOperation } from 'aws-amplify';
import Swal from 'sweetalert2';

import useEditPatientHistory from './EditPatientHistory/useEditPatientHistory';
import FamilyHistory from './EditPatientHistory/FamilyHistory';


const Family = ({
    global: global,
    setGlobalData: setGlobalData,
}) => {

	const [ table, setTable ] = useState([]);
  const { familyActions, api, edit } = useEditPatientHistory(global, setGlobalData, setList);
  const data = global.patient.patientHistory.familyHistory;

  useEffect(() => {
      if (data.items !== undefined && data.items !== null) {
        setList();
      }
  }, []);

  const removeFamily = async (id) => {
    familyActions.setlb_family(true);
      const result = await Swal.fire({ title: '¿Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
      if (result.value) {
          const _items = global.patient.patientHistory.familyHistory.items;
          
          API.graphql(graphqlOperation(deleteFamilyHistory, {input: {id: id}} ));
          _items.splice(_items.findIndex(v => v.id === id), 1);

          global.patient.patientHistory.familyHistory.items = _items;

          setGlobalData(global);
          
          setTimeout(() => {  
              setList();
              familyActions.setlb_family(false);   
          }, 2000);
      }
  }

  const setList = () => {
		var formated = [];
    const items = data.items.sort((a,b) => { return new Date(b.createdAt) - new Date(a.createdAt)});
		  items.forEach((item) => {
            var dItems = null;
            item.diseases.items.forEach((d) => {
                dItems = dItems+" - "+d.diseases.name;
            });
            
			formated.push({
				relationship: item.relationship.name,
				diseases: dItems,
				options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeFamily(item.id) }}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); familyActions.openFamilyModalToEdit(item) }}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
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
                {!familyActions.lb_family && <MDBIcon icon="plus" size="2x" />}
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