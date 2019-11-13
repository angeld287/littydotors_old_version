import React, { Component } from 'react';
import {Container, MDBCard, MDBCol, MDBRow, MDBCardBody } from 'mdbreact';

import ModuleTable from './ModuleTable';

import { MDBInput, MDBBtn } from 'mdbreact';

import { updateDoctorCustomFieldProps, createDoctorCustomFieldProps } from '../../../../../graphql/mutations';
import { listDoctorCustomFieldPropss, listFields } from '../../../../../graphql/queries';
import { GetDiferenstOfObjects, isObjectEmpty } from '../../../../../Functions/JsonObjects';

import { API, graphqlOperation } from 'aws-amplify';


//const mergeById = (fields, cProps) => fields.map(itm => ({...cProps.find((item) => (item.field.id === itm.id)),...itm}));
const INITIAL_STATE = {
  fields: null,
  oldFields: null,
};


class Card extends Component {
    constructor(props) {
        super(props);   

        this.state = {...INITIAL_STATE};
    }

    updateField = (e, changed_field, id) => {
        const field = this.state.fields.find(f => f.fieldid === id);
        this.state.fields.splice(this.state.fields.findIndex(f => f.fieldid === id), 1);

        switch (changed_field) {
            case "front_field_name":
                    field.front_field_name = e.target.value
                break;
            case "visible":
                    if(field.visible && field.required){
                        field.visible = !field.visible;
                        field.required = !field.required;
                    }else{
                        field.visible = !field.visible;
                    }
                break;
            case "required":
                    field.required = !field.required;
                break;
            default:
                break;
        }
        const nextIndex = this.state.fields.length + 1;
        //this.state.fields.splice(nextIndex, 1, field);
        const oldFields = this.state.oldFields;

        this.setState({fields: [ ...this.state.fields, field]});
    }

    updateFieldRegistredInCloud = (id) => {
        const field = this.state.fields.find(f => f.fieldid === id);
        this.state.fields.splice(this.state.fields.findIndex(f => f.fieldid === id), 1);

        field.registred_in_cloud = true;

        const nextIndex = this.state.fields.length + 1;
        //this.state.fields.splice(nextIndex, 1, field);
        const oldFields = this.state.oldFields;

        this.setState({fields: [ ...this.state.fields, field]});
    }

    saveChangesToTheCloud = () => {
        var ArrayObjects = JSON.parse(localStorage.getItem("ArrayObjects"));
        this.state.fields.forEach(localelem => {
            const cloudElem = ArrayObjects.find(ce => ce.fieldid === localelem.fieldid);
            if(localelem.registred_in_cloud && cloudElem.registred_in_cloud){
                const objectToUpdate = GetDiferenstOfObjects(localelem, cloudElem);
                if(!isObjectEmpty(objectToUpdate)){
                    objectToUpdate.id = localelem.id;
                    console.log("update")
                    API.graphql(graphqlOperation(updateDoctorCustomFieldProps, {input: objectToUpdate})).then( result =>{ console.log(result) })
                }
            }else{
                if(!isObjectEmpty(GetDiferenstOfObjects(localelem, cloudElem))){
                    const objectToCreate = {
                        name: localelem.name,
                        required: localelem.required,
                        visible: localelem.visible,
                        doctorCustomFieldPropsFieldId: localelem.fieldid
                    }
                    API.graphql(graphqlOperation(createDoctorCustomFieldProps, {input: objectToCreate})).then( result =>{})
                }        
            }
        });
             
    }

    getFieldsCustomProps = () => {
        const fieldsObjects = [];
        API.graphql(graphqlOperation(listFields)).then( result =>{
            const dbfields = result.data.listFields.items;
            API.graphql(graphqlOperation(listDoctorCustomFieldPropss)).then( result =>{
                const DoctorCustomPropsFields = result.data.listDoctorCustomFieldPropss.items;
                [].concat(dbfields).map((field, f) => {
                    const cProp = DoctorCustomPropsFields.find(item => item.field.id === field.id);
                    if(cProp === undefined){
                        const field_result = {
                            id: null,
                            fieldid: field.id,
                            front_field_name: field.name,
                            field: field.name,
                            required: false,
                            visible: false,
                            registred_in_cloud: false,
                        }
                        fieldsObjects.push(field_result);
                    }else{
                        const field_result = {
                            id: cProp.id,
                            fieldid: field.id,
                            front_field_name: cProp.name,
                            field: field.name,
                            required: cProp.required,
                            visible: cProp.visible,
                            registred_in_cloud: true,
                        }
                        fieldsObjects.push(field_result);
                    }
                })
                this.setState({ fields: fieldsObjects });
                localStorage.setItem("ArrayObjects", JSON.stringify(fieldsObjects));
            })
        })
          
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
                'label': 'Campo Visual',
                'field': 'front_field_name',
                'sort': 'asc'
                },
                {
                'label': 'Requerido',
                'field': 'required',
                'sort': 'asc'
                }
            ];

            const dummy = [{
                id: "iddummy",
                field: "fieldummy",
                front_field_name: "frontdummy",
                required: false,
                visible: false,
                registred_in_cloud: false,
            }];
            const fields = this.state.fields === null ? dummy : this.state.fields;

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
                            'visible': <MDBInput label=" " type="checkbox" id={"visible"+i} checked={field.visible} onChange={() => {this.updateField(null,"visible",field.fieldid)}}/>,
                            'front_field_name': <MDBInput type="text" value={field.front_field_name}  disabled={!field.visible} onChange={(e) => {this.updateField(e, "front_field_name",field.fieldid)}}/>,
                            'required': <MDBInput label=" " type="checkbox" id={"required"+i} checked={field.required} disabled={!field.visible} onChange={() => {this.updateField(null,"required",field.fieldid)}}/>,
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
                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBBtn type="button" onClick={this.getFieldsCustomProps}>data</MDBBtn>
                                    <h1 className="align-middle">Modulo de Citas</h1>
                                    <ModuleTable childProps={childProps}/>
                                    <MDBBtn type="button" onClick={this.saveChangesToTheCloud}>Guardar Cambios</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </Container>
            )
    }
}

    

export default Card;