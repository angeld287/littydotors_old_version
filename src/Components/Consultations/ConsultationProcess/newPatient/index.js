import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker } from "mdbreact";



import useNewPatient from './useNewPatient';

const NewPatient = () => {

  const { setBirthdate, username, setUsername, name, setName, email, setEmail, phone, setPhone, weight, setWeight, height, setHeight } = useNewPatient();

  return (
           <div className="grey-text">
             <MDBRow>
               <MDBCol>
                 <MDBInput onChange={e => {setUsername(e.target.value)}} value={username} label="Nombre de Usuario" icon="user" group type="text" validate error="wrong" success="right"></MDBInput>
                 <MDBInput onChange={e => {setName(e.target.value)}} value={name} label="Nombre Completo" icon="" group type="text" validate error="wrong" success="right"></MDBInput>
                 <MDBInput onChange={e => {setEmail(e.target.value)}} value={email} label="Email" icon="envelope" group type="text" validate error="wrong" success="right"></MDBInput>
                 <MDBInput onChange={e => {setPhone(e.target.value)}} value={phone} label="Telefono" icon="phone" group type="text" validate error="wrong" success="right"></MDBInput>
               </MDBCol>
               <MDBCol>
                 <MDBRow style={{marginLeft: 3}}><MDBIcon icon="birthday-cake" size="2x" style={{marginTop: 20}}/><MDBDatePicker style={{marginLeft: 20}} icon="birthday-cake" getValue={d => setBirthdate(d)} /></MDBRow>
                 <MDBInput onChange={e => {setWeight(e.target.value)}} value={weight} label="Peso" icon="weight" group type="text" validate error="wrong" success="right"></MDBInput>
                 <MDBInput onChange={e => {setHeight(e.target.value)}} value={height} label="Altura" icon="pencil-ruler" group type="text" validate error="wrong" success="right"></MDBInput>
               </MDBCol>
             </MDBRow>
           </div>
         );
}

export default NewPatient;