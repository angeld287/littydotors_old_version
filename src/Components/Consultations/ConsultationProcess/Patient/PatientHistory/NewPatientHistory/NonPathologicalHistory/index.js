import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useNonPathologicalHistory from './useNonPathologicalHistory';

const NonPathologicalHistory = (
                      {
                        register: register
                      } 
                   ) => {
      const { alcohol, setAlcoholValue, smoking, setSmokingValue, drugs, setDrugsValue, immunizations, setImmunizationsValue } = useNonPathologicalHistory();

      const frequencyItems = ['Diario', 'InterDiario', 'Semanal', 'Mensual', 'Anual'];
      const data = [].concat(frequencyItems).map((item,i)=> <option key={i} value={item}>{item}</option>);

  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        <MDBCol md="2" >
          <div className="custom-control custom-checkbox">
              <input name="alcohol" id="alcohol" onChange={setAlcoholValue} type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="alcohol">Alcohol</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <select disabled={!alcohol} className="form-control" name="alcohol_frequency" ref={register}>
            <option value="0">Frecuencia</option> 
            {data}
          </select>
        </MDBCol>
        <MDBCol md="7">
          <input disabled={!alcohol} name="alcohol_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="2" >
          <div className="custom-control custom-checkbox">
              <input name="smoking" id="smoking" onChange={setSmokingValue} type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="smoking">Tabaquismo</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <select disabled={!smoking} className="form-control" name="smoking_frequency" ref={register}>
            <option value="0">Frecuencia</option> 
            {data}
          </select>
        </MDBCol>
        <MDBCol md="7">
          <input disabled={!smoking} name="smoking_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="2" >
          <div className="custom-control custom-checkbox">
              <input name="drugs" id="drugs" onChange={setDrugsValue} type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="drugs">Drogas</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <select disabled={!drugs} className="form-control" name="drugs_frequency" ref={register}>
            <option value="0">Frecuencia</option> 
            {data}
          </select>
        </MDBCol>
        <MDBCol md="7">
          <input disabled={!drugs} name="drugs_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>

      <MDBRow className="mb-3">
        <MDBCol md="2" >
          <div className="custom-control custom-checkbox">
              <input name="immunizations" id="immunizations" onChange={setImmunizationsValue} type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="immunizations">Inmunizaciones</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <select disabled={!immunizations} className="form-control" name="immunizations_frequency" ref={register}>
            <option value="0">Frecuencia</option> 
            {data}
          </select>
        </MDBCol>
        <MDBCol md="7">
          <input disabled={!immunizations} name="immunizations_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default NonPathologicalHistory;