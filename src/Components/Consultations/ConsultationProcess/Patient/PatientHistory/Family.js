import React, { Fragment, useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";


const Family = ({
    data: data
}) => {

	const [ table, setTable ] = useState([]);

  useEffect(() => {
        setList();
  }, []);

  const setList = () => {
		var formated = [];

		data.items.forEach((item) => {
            var dItems = "";

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

export default Family;