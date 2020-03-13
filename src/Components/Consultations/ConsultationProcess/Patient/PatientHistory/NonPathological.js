import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import { deleteNonPathologicalHistory } from '../../../../../graphql/mutations';

import { API, graphqlOperation } from 'aws-amplify';
import Swal from 'sweetalert2';

import useEditPatientHistory from './EditPatientHistory/useEditPatientHistory';
import NonPathologicalHistory from './EditPatientHistory/NonPathologicalHistory';


const NonPathological = ({
    global: global,
    setGlobalData: setGlobalData,
}) => {
  
  const [ table, setTable ] = useState([]);
  const { nonPathActions, api, edit } = useEditPatientHistory(global, setGlobalData, setList);
  const data = global.patient.patientHistory.nonPathologicalHistory;

  useEffect(() => {
    if (data.items !== undefined && data.items !== null) {
        setList();
    }
  }, []);

  const removeNonPath = async (id) => {
    nonPathActions.setlb_nonpath(true);
      const result = await Swal.fire({ title: '¿Desea eliminar el elemento?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Eliminar', cancelButtonText: 'Cancelar'});
      if (result.value) {
          const _items = global.patient.patientHistory.nonPathologicalHistory.items;
          
          API.graphql(graphqlOperation(deleteNonPathologicalHistory, {input: {id: id}} ));
          _items.splice(_items.findIndex(v => v.id === id), 1);

          global.patient.patientHistory.nonPathologicalHistory.items = _items;

          setGlobalData(global);
          
          setTimeout(() => {  
              setList();
              nonPathActions.setlb_nonpath(false);   
          }, 2000);
      }
  }

  const setList = () => {
		var formated = [];

    
        data.items.forEach((item) => {              
                
          formated.push({
            type: item.type.name,
            frequency: item.frequency,
            options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); removeNonPath(item.id) }}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); nonPathActions.openNonPathModalToEdit(item) }}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
          });
        });

    const _nonpath = {
			columns: [ { label: 'Tipo', field: 'type', sort: 'asc' }, { label: 'Frecuencia', field: 'frequency', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};

    setTable(_nonpath);
	};


  
  return (
    <MDBContainer>
        <br/>
        <MDBContainer>
          <MDBBtn onClick={nonPathActions.toggleNonPath} disabled={nonPathActions.loadingButton} className="btn btn-primary btn-sm">
              {!nonPathActions.lb_nonpath && <MDBIcon icon="plus" size="2x" />}
              {nonPathActions.lb_nonpath && 
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
        <MDBModal isOpen={nonPathActions.nonPathModal} toggle={nonPathActions.toggleNonPath} size="lg">
          <NonPathologicalHistory 
            toggleNonPath={nonPathActions.toggleNonPath}
            nonPathActions={nonPathActions}
            api={api}
            createNonPath={nonPathActions.createNonPath}
            editNonPath={nonPathActions.editNonPath}
            edit={edit}
            nonPathEditObject={nonPathActions.nonPathEditObject}
            global={global}
            setGlobalData={setGlobalData}
            setList={setList}
          />
        </MDBModal>
    </MDBContainer>
  );
}

export default NonPathological;