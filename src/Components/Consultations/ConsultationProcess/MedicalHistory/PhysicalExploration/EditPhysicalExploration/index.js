import React, { useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

const EditPhysicalExploration = ({
    editPhysicalExploration: editPhysicalExploration,
    fields: fields,
    editLoading: editLoading,
    setEditData: setEditData,
}) => {

  useEffect(() => {
      let didCancel = false;

      const fetch = async () => {   
          setEditData();
      };

      fetch();

      return () => {
          didCancel = true;
      };
  }, []);

  return (
    <MDBContainer>
          <div className="form-group">
            <label htmlFor="general_exploration">Exploracion General</label>
          </div>
          <textarea value={fields.general_exploration.general_exploration} onChange={e => {
              e.preventDefault();
              fields.general_exploration.setgeneral_exploration(e.target.value)
            }} 
          name="general_exploration" className="form-control" id="general_exploration" rows="7" ></textarea>
          
          <h6 className="text-center font-weight-bold pt-5 pb-3 mb-2"><strong>Signos Vitales</strong></h6>
          <MDBRow className="mb-3">
            <MDBCol>
              <input value={fields.breathing.breathing} onChange={e => {
                  e.preventDefault();
                  fields.breathing.setbreathing(e.target.value)
                }}
                name="breathing" placeholder="Respiracion" autoComplete="off" className="form-control" />
            </MDBCol>
            <MDBCol>
              <input value={fields.pulse.pulse} onChange={e => {
                  e.preventDefault();
                  fields.pulse.setpulse(e.target.value)
                }}name="pulse" placeholder="Pulso" autoComplete="off" className="form-control" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol>
              <input value={fields.blood_pressure.blood_pressure} onChange={e => {
                  e.preventDefault();
                  fields.blood_pressure.setblood_pressure(e.target.value)
                }}name="blood_pressure" placeholder="Presion de Sangre" autoComplete="off" className="form-control" />
            </MDBCol>
            <MDBCol>
              <input value={fields.temperature.temperature} onChange={e => {
                  e.preventDefault();
                  fields.temperature.settemperature(e.target.value)
                }}name="temperature" placeholder="Temperatura" autoComplete="off" className="form-control" />
            </MDBCol>
          </MDBRow>
          <h6 className="text-center font-weight-bold pt-5 pb-3 mb-2"><strong>Exploracion Regional</strong></h6>
          <MDBRow className="mb-3">
            <MDBCol>
              <input value={fields.head.head} onChange={e => {
                  e.preventDefault();
                  fields.head.sethead(e.target.value)
                }}name="head" placeholder="Cabeza" autoComplete="off" className="form-control" />
            </MDBCol>
            <MDBCol>
              <input value={fields.neck.neck} onChange={e => {
                  e.preventDefault();
                  fields.neck.setneck(e.target.value)
                }}name="neck" placeholder="Cuello" autoComplete="off" className="form-control" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol>
              <input value={fields.thorax.thorax} onChange={e => {
                  e.preventDefault();
                  fields.thorax.setthorax(e.target.value)
                }}name="thorax" placeholder="Torax" autoComplete="off" className="form-control" />
            </MDBCol>
            <MDBCol>
              <input value={fields.abdomen.abdomen} onChange={e => {
                  e.preventDefault();
                  fields.abdomen.setabdomen(e.target.value)
                }}name="abdomen" placeholder="Abdomen" autoComplete="off" className="form-control" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol>
              <input value={fields.members.members} onChange={e => {
                  e.preventDefault();
                  fields.members.setmembers(e.target.value)
                }}name="members" placeholder="Miembro" autoComplete="off" className="form-control" />
            </MDBCol>
            <MDBCol>
              <input value={fields.genitals.genitals} onChange={e => {
                  e.preventDefault();
                  fields.genitals.setgenitals(e.target.value)
                }}name="genitals" placeholder="Genitales" autoComplete="off" className="form-control" />
            </MDBCol>
          </MDBRow>
          <div className="form-group">
            <label htmlFor="others">Otro</label>
            <textarea value={fields.others.others} onChange={e => {
                e.preventDefault();
                fields.others.setothers(e.target.value)
              }}name="others"  className="form-control" id="others" rows="3" ></textarea>
          </div>
          <div className="text-center py-4 mt-3">
              {!editLoading && <MDBBtn className="btn btn-outline-blue" onClick={editPhysicalExploration} >Editar</MDBBtn>}
              {editLoading && <MDBSpinner small />}
					</div>
    </MDBContainer>
  );
}

export default EditPhysicalExploration;