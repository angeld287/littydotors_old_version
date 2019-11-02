import React, { Component } from 'react';
import {Container, MDBCard, MDBCol, MDBRow, MDBCardBody } from 'mdbreact';

import ModuleTable from './ModuleTable';

import { MDBInput, MDBBtn } from 'mdbreact';

class Card extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            fields:[{
                id: "idfecha",
                field: "fecha",
                required: false,
                visible: false
            },
            {
                id: "idposicion",
                field: "posicion",
                required: false,
                visible: false
            },
            {
                id: "idcosto",
                field: "costo",
                required: false,
                visible: false
            }]
        }
    }

    updateFild = (n, id) => {

        const field = this.state.fields.find(f => f.id === id);
        this.state.fields.splice(this.state.fields.findIndex(f => f.id === id), 1);

        if(n === 1){
            field.visible= !field.visible;
        }else if(n === 2){
            field.required= !field.required;
        }
        
        const fields = [
          ...this.state.fields,
          field
        ]
        this.setState({ fields });
    }

    saveChanges = () => {
        console.log(this.state.fields)
    }

    render(){
       
             const columns = [
                {
                'label': 'Campo',
                'field': 'campo',
                'sort': 'asc'
                },
                {
                'label': 'Visible',
                'field': 'visible',
                'sort': 'asc'
                },
                {
                'label': 'Requerido',
                'field': 'required',
                'sort': 'asc'
                }
            ];

            const { fields } = this.state;

            const rows = [];

            [].concat(fields)
                .sort((a, b) => {
                    if(a.field > b.field){return 1}
                    if(a.field < b.field){return -1}
                    return 0
                })
                .map((field,i)=> 
                    {
                        const row = {
                            'field': field.field,
                            'visible': <MDBInput label=" " type="checkbox" id={"visible"+i} onChange={() => {this.updateFild(1,field.id)}}/>,
                            'required': <MDBInput label=" " type="checkbox" id={"required"+i} disabled={!field.visible} onChange={() => {this.updateFild(2,field.id)}}/>,
                        }

                        rows.push(row);
                    }
                );

        const childProps = {
            ...this.props.childProps,
            columns,
            rows
        };

        return (
                <Container>
                    <MDBRow>
                        <MDBCol md="9">
                            <MDBCard>
                                <MDBCardBody>
                                    <h1 className="align-middle">Modulo de Citas</h1>
                                    <ModuleTable childProps={childProps}/>
                                    <MDBBtn color="primary" onClick={this.saveChanges}>Primary</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Container>
            )
    }
}

    

export default Card;