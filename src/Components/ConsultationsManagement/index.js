import React, { Component } from "react";
import {   MDBContainer, MDBCol, MDBRow, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

import { Redirect } from 'react-router'
import List from './List'
import Details from './Details'

import moment from 'moment';

import { API, graphqlOperation } from 'aws-amplify';

import { onCreateMedicalConsultation, onUpdateMedicalConsultation } from './../../graphql/subscriptions';

//import { listMedicalConsultations } from './../../graphql/queries';

import { updateMedicalConsultation, createRejection, createNotification } from './../../graphql/mutations';
import { listMedicalConsultations } from './../../graphql/custom-queries';

class ConsultationsManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemClassicTabs1: "1",
      activeItemClassicTabs2: "1",
      redirect: false,
      consultations: null,
      ItemData: null,
      selectedItem: null,
      insertedConsultations: null,
      approvedConsultations: null,
      confirmedConsultations: null,
      presentConsultations: null,
      inProcessConsultations: null,
      finishedConsultations: null,
      rejectedConsultations: null,
      canceledConsultations: null,
    };

    this._isMounted = false;

    this.changeState = this.changeState.bind(this);
    this.GetConsultationsList = this.GetConsultationsList.bind(this);
    this.ActiveElement = this.ActiveElement.bind(this);
    this.updateMedicalConsultationData = this.updateMedicalConsultationData.bind(this);
    this.updateFieldFromConsultations = this.updateFieldFromConsultations.bind(this);
    this.createRejection = this.createRejection.bind(this);
  }

  changeState(event, tab){
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.

    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({ activeItemClassicTabs1: tab, activeItemClassicTabs2: tab})
      this.setState({ItemData: null, selectedItem: null});
      this.GetConsultationsList();
    }
  }

  ActiveElement = (item, i) => {
    //el problema del cambio de item es por es state
    this.setState({ItemData: item, selectedItem: i});
  }

  componentDidMount = async () => {
    this._isMounted = true;
    this.redirect();

    //suscripcion para ingresos de consulta
    this.subscription = API.graphql(
      graphqlOperation(onCreateMedicalConsultation, {
        doctorname: this.props.childProps.state.doctorusername,
        secretary: this.props.childProps.state.secretary,
      })
    ).subscribe({
      next: MedicalConsultation => {
        const consultation = MedicalConsultation.value.data.onCreateMedicalConsultation

        if (this.state.consultations !== null) {
          const consultations = [
            ...this.state.consultations.filter(r => {
              return (
                r.id !== consultation.id
              )
            }),
            consultation
          ]
          this.setState({ consultations });
          this.SetConsultationsList();
        }
      }
    })
    
    //suscripcion para modificaciones de consulta | se decidio no utilizar esta suscripcion porque hay otra forma de hacerlo que evita consumir este servicio
    this.subscription = API.graphql(
      graphqlOperation(onUpdateMedicalConsultation, {
        read_client: true,
        read_secretary: false,
        read_company: false,
        doctorname: this.props.childProps.state.doctorusername,
        secretary: this.props.childProps.state.secretary,
      })
    ).subscribe({
      next: MedicalConsultation => {
        const consultation = MedicalConsultation.value.data.onUpdateMedicalConsultation
        if (this.state.consultations !== null) {
          this.state.consultations.splice(this.state.consultations.findIndex(v => v.id === consultation.id), 1);
        
          const consultations = [
            ...this.state.consultations.filter(r => {
              return (
                r.id !== consultation.id
              )
            }),
            consultation
          ]
          
          this.setState({ consultations });
          this.SetConsultationsList();
        }
      }
    })
  }

  redirect = () => {
    if(this.props.childProps.state.user_roll === 'client'){
          this.setState({ redirect: true });
    }
    if (this.state.consultations === null) {
      this.GetConsultationsList(); 
    }
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
    this._isMounted = false;
  }

  GetConsultationsList = () => {
    var prev_date = new Date();
    prev_date.setDate(prev_date.getDate() - 1);
    API.graphql(graphqlOperation(listMedicalConsultations, {
      filter: {
        or: [
          {date_created: {gt: String(moment(prev_date).format('YYYY-MM-DDTHH:mm:ss.SSS'))}}, 
          {date_created: {eq: String(moment(prev_date).format('YYYY-MM-DDTHH:mm:ss.SSS'))}},
        ]
      },
      limit: 100
    })).then( result =>{
        
        this.setState({consultations: result.data.listMedicalConsultations.items});
        this.SetConsultationsList();

    }).catch( err => {
        console.warn(err)
    });
  }

  SetConsultationsList = () => {
    const items = this.state.consultations;

    let insertedConsultations = items.filter(obj => {return obj.state === "INSERTED"})
    let approvedConsultations = items.filter(obj => {return obj.state === "APPROVED"})
    let confirmedConsultations = items.filter(obj => {return obj.state === "CONFIRMED"})
    let presentConsultations = items.filter(obj => {return obj.state === "PRESENT"})
    let inProcessConsultations = items.filter(obj => {return obj.state === "IN_PROCESS"})
    let finishedConsultations = items.filter(obj => {return obj.state === "FINISHED"})
    let rejectedConsultations = items.filter(obj => {return obj.state === "REJECTED"})
    let canceledConsultations = items.filter(obj => {return obj.state === "CANCELED"})

    this.setState(
      { 
        insertedConsultations: insertedConsultations,
        approvedConsultations: approvedConsultations,
        confirmedConsultations: confirmedConsultations,
        presentConsultations: presentConsultations,
        inProcessConsultations: inProcessConsultations,
        finishedConsultations: finishedConsultations,
        rejectedConsultations: rejectedConsultations,
        canceledConsultations: canceledConsultations
      })
  }

  updateMedicalConsultationData = async (object, update) =>{
    await API.graphql(graphqlOperation(updateMedicalConsultation, {input: object}))
    .then( result =>{
      this.updateFieldFromConsultations(object, update);
    });
  }

  updateFieldFromConsultations = (object, update) => {
    switch(update) {
        case 'read':
            if (this.props.childProps.state.user_roll === 'company') {
              const read_company = object.read_company
              this.setState({
                consultations: this.state.consultations.map(el => (el.id === object.id ? Object.assign({}, el, { read_company }) : el))
              });
            }else if (this.props.childProps.state.user_roll === 'secretary') {
              const read_secretary = object.read_secretary
              this.setState({
                consultations: this.state.consultations.map(el => (el.id === object.id ? Object.assign({}, el, { read_secretary }) : el))
              }); 
            }
            this.SetConsultationsList();
            break;
        case 'state':
            const state = object.state
            this.setState({
              consultations: this.state.consultations.map(el => (el.id === object.id ? Object.assign({}, el, { state }) : el))
            });
            this.SetConsultationsList();
            this.setState({ItemData: null, selectedItem: null});
            break;  
        default:
            break;
    }
  }

  createRejection = async (object) => {
    await API.graphql(graphqlOperation(createRejection, {input: object}))
    .then( result =>{
      //this.updateFieldFromConsultations(object, update);
    });
  }

  createNotification = async (object) => {
    await API.graphql(graphqlOperation(createNotification, {input: object}))
    .then( result =>{
      //this.updateFieldFromConsultations(object, update);
    });
  }

  render() {
    const {redirect, ItemData, selectedItem} = this.state

    const insertedConsultations = {selectedItem: selectedItem, data: this.state.insertedConsultations}
    const approvedConsultations = {selectedItem: selectedItem, data: this.state.approvedConsultations}
    const confirmedConsultations = {selectedItem: selectedItem, data: this.state.confirmedConsultations}
    const presentConsultations = {selectedItem: selectedItem, data: this.state.presentConsultations}
    const inProcessConsultations = {selectedItem: selectedItem, data: this.state.inProcessConsultations}
    const finishedConsultations = {selectedItem: selectedItem, data: this.state.finishedConsultations}
    const rejectedConsultations = {selectedItem: selectedItem, data: this.state.rejectedConsultations}
    const canceledConsultations = {selectedItem: selectedItem, data: this.state.canceledConsultations}

    return (
      <MDBContainer className="classic-tabs">
          <MDBNav classicTabs color="cyan" className="mt-5">
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "1" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "1")
              }} >
                ingresadas
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "2" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "2")
              }} >
                aprobadas
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "3" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "3")
              }} >
                confirmadas
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "4" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "4")
              }} >
                Presente
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "5" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "5")
              }} >
                En proceso
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "6" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "6")
              }} >
                Finalizada
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "7" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "7")
              }} >
                Rechazadas
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={ this.state.activeItemClassicTabs1 === "8" ? "active" : "" } onClick={(e) => {
                  this.changeState(e, "8")
              }} >
                Canceladas
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent
            className="card mb-5"
            activeItem={this.state.activeItemClassicTabs2}
          >
            <MDBTabPane tabId="1">
              <MDBContainer>
                  <MDBRow>
                    <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                      <List Consultations={insertedConsultations}
                            childProps={this.props.childProps}
                            ActiveElement={this.ActiveElement}
                            updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                    </MDBCol>
                    <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                      <Details ItemData={ItemData}
                               updateMedicalConsultationData={this.updateMedicalConsultationData}
                               createRejection={this.createRejection}/>
                    </MDBCol>
                  </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={approvedConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}
                             createNotification={this.createNotification}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={confirmedConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="4">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={presentConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="5">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={inProcessConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="6">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={finishedConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="7">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={rejectedConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
            <MDBTabPane tabId="8">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="9" lg="4" xl="5" className="mx-auto mt-3">
                    <List Consultations={canceledConsultations}
                          childProps={this.props.childProps}
                          ActiveElement={this.ActiveElement}
                          updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                  <MDBCol md="9" lg="6" xl="7" className="mx-auto mt-3">
                    <Details ItemData={ItemData}
                             updateMedicalConsultationData={this.updateMedicalConsultationData}/>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabPane>
          </MDBTabContent>
          {
              (redirect) &&
              <Redirect to='/profile'/>
          }
        </MDBContainer>
    );
  }
}

export default ConsultationsManagement;