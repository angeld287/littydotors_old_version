import React, { useState, Fragment, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable,
         MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

import Select from 'react-select'

const NonPathologicalHistory = ({
    toggleNonPath: toggleNonPath,
    api: api,
    createNonPath: createNonPath,
    editNonPath: editNonPath,
    edit: edit,
    nonPathEditObject: nonPathEditObject
}) => {

  const [ type, setType ] = useState("");
  const [ frequency, setFrequency ] = useState("");
  const [ duration, setDuration ] = useState("");
  const [ comment, setComment ] = useState("");

  const frequencies = [];
  api.nonpathfrequencies.forEach(element => {
    var item = {value: element.id, label: element.name};
    frequencies.push(item);
  });

  const types = [];
  api.nonpathtypes.forEach(element => {
    var item = {value: element.id, label: element.name};
    types.push(item);
  });

  const options = [
    { value: 'cada 5 horas', label: 'cada 5 horas' },
    { value: 'cada 6 horas', label: 'cada 6 horas' },
    { value: 'cada 7 horas', label: 'cada 7 horas' },
    { value: 'cada 8 horas', label: 'cada 8 horas' },
    { value: 'cada 9 horas', label: 'cada 9 horas' },
    { value: 'cada 10 horas', label: 'cada 10 horas' },
    { value: 'cada 11 horas', label: 'cada 11 horas' },
    { value: 'cada 12 horas', label: 'cada 12 horas' },
    { value: 'cada 13 horas', label: 'cada 13 horas' },
    { value: 'cada 14 horas', label: 'cada 14 horas' },
    { value: 'cada 15 horas', label: 'cada 15 horas' },
    { value: 'cada 16 horas', label: 'cada 16 horas' },
    { value: 'cada 17 horas', label: 'cada 17 horas' },
    { value: 'cada 18 horas', label: 'cada 18 horas' },
    { value: 'cada 19 horas', label: 'cada 19 horas' },
    { value: 'cada 20 horas', label: 'cada 20 horas' },
    { value: 'cada 21 horas', label: 'cada 21 horas' },
    { value: 'cada 22 horas', label: 'cada 22 horas' },
    { value: 'cada 23 horas', label: 'cada 23 horas' },
    { value: 'cada 24 horas', label: 'cada 24 horas' },
  ];

  useEffect(() => {            
        if(edit){
          setType(nonPathEditObject);          
          setFrequency(nonPathEditObject.frequency);
          setDuration(nonPathEditObject.duration);
          setComment(nonPathEditObject.comment);
        }else{
          setType("");          
          setFrequency("");
          setDuration("");
          setComment("");
          
        }
  }, []);

  const tindex = !edit ? null : types.findIndex(v => v.value === nonPathEditObject.type);
  const findex = !edit ? null : frequencies.findIndex(v => v.value === nonPathEditObject.frequency);
  return (
    <MDBContainer>
        <MDBModalHeader toggle={toggleNonPath}>Crear Antecedente No Patologico</MDBModalHeader>
        <MDBModalBody>
          <label htmlFor="type" className="mt-2" >Tipo</label>
          <Select id="type" options={types} defaultValue={types[tindex]} onChange={ (v) => {setType(v)}} />
          <label htmlFor="frequency" className="mt-2" >Frecuencia</label>
          <Select id="frequency" options={frequencies} defaultValue={frequencies[findex]} onChange={ (v) => {setFrequency(v.value)}}/>
          <div className="form-group">
            <label htmlFor="comment">Comentario</label>
            <textarea name="comment" className="form-control" id="comment" rows="3" value={comment} onChange={ (e) => {setComment(e.target.value)}}></textarea>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggleNonPath}>Cancelar</MDBBtn>

          {!edit &&
            <MDBBtn color="primary" onClick={(e) => {
                e.preventDefault();
                createNonPath({
                    date: new Date(),
                    frequency: frequency,
                    type: type,
                    duration: duration,
                    comment: comment,
                    doctor: "String",
                    secretary: "String",
                    patient: "String",
                    medicalPrescriptionMedicationsId: type.value,
                    medicationName: type.label,
                    medicalPrescriptionPostconsultactId: "sss"
                });
                toggleNonPath();
            }}>Crear</MDBBtn>
          }
          {edit &&
            <MDBBtn color="primary" onClick={(e) => {
                e.preventDefault();
                editNonPath({
                    date: new Date(),
                    frequency: frequency,
                    type: type,
                    duration: duration,
                    comment: comment,
                    doctor: "String",
                    secretary: "String",
                    patient: "String",
                    medicalPrescriptionMedicationsId: type.value,
                    medicationName: type.label,
                    medicalPrescriptionPostconsultactId: "sss"
                });
                toggleNonPath();
            }}>Guardar Cambios</MDBBtn>
          }
        </MDBModalFooter>
    </MDBContainer>
  );
}

export default NonPathologicalHistory;