import React, {useState} from "react";
import { MDBContainer, MDBBox, MDBBtn, MDBRow, MDBCol, MDBSpinner, MDBTypography, MDBCard, MDBInput, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import { API, graphqlOperation } from 'aws-amplify';
import Link from '@material-ui/core/Link';
import Select from 'react-select'

import useConsultations from './useConsultations';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Consultations = ({childProps: childProps}) => { 
    const { createConsultation, loading, error, patients, setPatient, patient, redirectToProcess, autoCompleteLoading, 
    loadingButton, searchPatient, newPatientName,  setNewPatientName, setReason, reason} = useConsultations();
    const classes = useStyles();
    const theme = useTheme();
    const preventDefault = event => event.preventDefault();

    const setReasonAll = (r) => {
      setReason(r);
      localStorage.setItem('consultationReason', r);
    }

    if (loading) {
      return (
        <MDBContainer>
          <MDBBox display="flex" justifyContent="center" className="mt-5">
            <MDBSpinner big/>
          </MDBBox>
        </MDBContainer>
      );
    }
    if (error) return <h2>Ha ocurrido un error</h2>;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <br/>
            <br/>
            <MDBTypography tag='h2'>Buscar Paciente para Consulta</MDBTypography>
            <br/>
              <Select 
                options={patients}
                onChange={(newValue) => {setPatient(newValue);}}
                onInputChange={v => setNewPatientName(v)}
                noOptionsMessage={() => {
                  return <p>El paciente no existe...  <Link href={"/consultations/process/null/"+newPatientName}>Desea crear un paciente nuevo?</Link></p>
                }}
              />
            <br/>
            <br/>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={patient != null ? patient.image : "https://asociaciondenutriologia.org/img/default_user.png"}
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {patient != null ? patient.name : "N/A"}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {patient != null ? patient.email : "N/A"}
                  </Typography>
                  <Typography component="h5" variant="h5">
                    {patient != null ? patient.age : "00"}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </MDBCol>
          <MDBCol md="8">
            <MDBCard style={{ width: '100%' }}>
              <h4 className="text-center font-weight-bold mt-3 mb-1"><strong>Razon de Consulta Medica</strong></h4>
              <div style={{marginLeft: 20, marginRight: 20}}>
                <MDBInput type="textarea" rows="6" onChange={ e => {e.preventDefault(); setReasonAll(e.target.value);}}/>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <br/>
            <div className={classes.controls}>  
              {/* redirectToProcess((patient != null ? patient.id : "N/A"), false) */}
              {!loadingButton &&(<MDBBtn  disabled={(patient === null || patient.name === "N/A") || (reason === "")} 
                                          className={classes.playIcon} onClick={ e => {e.preventDefault(); createConsultation(childProps.state, patient, reason)}} color="indigo" >Crear Consulta Medica</MDBBtn>)}
              {loadingButton && <MDBSpinner small/>}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 400,
  },
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default Consultations;