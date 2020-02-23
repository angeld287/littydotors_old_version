import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

const NonPathological = ({
    data: data,
}) => {
  
  
	const [ table, setTable ] = useState([]);

  useEffect(() => {
        setList();
  }, []);

  const setList = () => {
		var formated = [];

    if (data.items !== undefined && data.items !== null) {
        data.items.forEach((item) => {          
          formated.push({
            type: item.type.name,
            frequency: item.frequency,
            options: (<Fragment><MDBBtn color="red" size="sm" onClick={(e) => {e.preventDefault(); /* removeNonPath(item.id) */}}> <MDBIcon icon="trash" size="2x"/></MDBBtn><MDBBtn size="sm" onClick={(e) => {e.preventDefault(); /* openNonPathModalToEdit(item) */}}><MDBIcon icon="edit" size="2x"/></MDBBtn></Fragment>)
          });
        }); 
    }

    const _nonpath = {
			columns: [ { label: 'Tipo', field: 'type', sort: 'asc' }, { label: 'Frecuencia', field: 'frequency', sort: 'asc' }, { label: 'Opciones', field: 'options', sort: 'disabled' }],
			rows: formated
		};

    setTable(_nonpath);
	};

  return (
      <MDBContainer>
          <MDBDataTable
            striped bordered searchLabel="Buscar"
            responsiveSm={true} small hover entries={5}
            btn={true} data={table} noRecordsFoundLabel="No se han encontrado datos"
            entriesLabel="Cantidad" entriesOptions={[ 5, 10 ]} infoLabel={[ '', '-', 'de', 'registros' ]}
            paginationLabel={[ 'Anterior', 'Siguiente' ]} noBottomColumns={true}
          />
      </MDBContainer>
  );
}

export default NonPathological;