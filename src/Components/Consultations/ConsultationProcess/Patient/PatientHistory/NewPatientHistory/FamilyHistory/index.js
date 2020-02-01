import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useFamilyHistory from './useFamilyHistory';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const FamilyHistory = (
                      {
                        register: register,
                        api: api,
                        setFatherDiseases: setFatherDiseases,
                        setMotherDiseases: setMotherDiseases,
                        setBrothersDiseases: setBrothersDiseases,
                        setGrandfatherDiseases: setGrandfatherDiseases,
                        setGrandmotherDiseases: setGrandmotherDiseases,
                        setOtherDisease: setOtherDisease
                      } 
                   ) => {

      const frequencyItems = ['Diario', 'InterDiario', 'Semanal', 'Mensual', 'Anual'];
      const data = [].concat(frequencyItems).map((item,i)=> <option key={i} value={item}>{item}</option>);

  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Padre</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="father_alive" id="father_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="father_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="fatherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setFatherDiseases(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Medicaciones" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="father_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>



      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Madre</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="mother_alive" id="mother_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="mother_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="motherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setMotherDiseases(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Enfermedades" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="mother_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>


      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Hermanos</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="brother_alive" id="brother_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="brother_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="brotherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setBrothersDiseases(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Enfermedades" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="brother_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>


      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Abuelo</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="gfather_alive" id="gfather_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="gfather_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="gfatherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setGrandfatherDiseases(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Enfermedades" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="gfather_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>


      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Abuela</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="gmother_alive" id="gmother_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="gmother_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="gmotherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setGrandmotherDiseases(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Enfermedades" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="gmother_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>


      <MDBRow className="mb-3">
        <MDBCol md="1" >
          <h6 className="text-center font-weight-bold pt-1 pb-1 mb-1"><strong>Otros</strong></h6>
        </MDBCol>
        <MDBCol md="1" >
          <div className="custom-control custom-checkbox">
              <input name="other_alive" id="other_alive" type="checkbox" className="custom-control-input" ref={register}/>
              <label className="custom-control-label" htmlFor="other_alive">Con vida?</label>
          </div>
        </MDBCol>
        <MDBCol md="3">
          <Autocomplete
            multiple
            id="otherdiseases"
            options={api.diseases}
            getOptionLabel={option => option.name}
            onChange={(event, newValue) => {setOtherDisease(newValue)}}
            renderInput={params => (
              <TextField {...params} label="Enfermedades" variant="outlined" fullWidth/>
            )}
          />
        </MDBCol>
        <MDBCol md="7">
          <input name="other_comment" placeholder="Comentario" className="form-control" ref={register}/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FamilyHistory;