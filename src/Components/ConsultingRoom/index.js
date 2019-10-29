import React, {Component} from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, /* MDBInput, */ MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,
  MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { API, graphqlOperation } from 'aws-amplify';

import { getConsultingRoom } from '../../graphql/queries';
import { listMedicalAppointments } from '../../graphql/queries';

import { createMedicalAppointment } from '../../graphql/mutations';
import EnumState from './EnumState.ts'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class ConsultingRoom extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      details: "",
      modal9: false,
      consultingRoom: {},
      dataLoaded: false,
      consultations: {}
      
     };

     this._isMounted = false;
  }
  
  componentDidMount = () => {
    this._isMounted = true;
    if(Object.keys(this.state.consultingRoom).length === 0){
      const { id } = this.props.match.params
      API.graphql(graphqlOperation(getConsultingRoom, {
          id: id
      })).then( result =>{
          this.setState({ consultingRoom: result.data.getConsultingRoom})

          API.graphql(graphqlOperation(listMedicalAppointments, {
              filter: {
                secretary: {
                  eq: result.data.getConsultingRoom.secretary
                }
              }
          })).then( result =>{
              this.setState({ consultations: result.data.listMedicalAppointments.items})
          }).catch( err => {
            console.log(err)
          });

      }).catch( err => {
        console.log(err)
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  
  CreateConsultation = () => {
    const consultationData = {
        input:{
          medicalConsultationLocationId: this.state.consultingRoom.location.id,
          medicalConsultationDoctorId: this.state.consultingRoom.doctor.id,
          secretary: this.state.consultingRoom.secretary,
          details: this.state.details,
          date_of_medical_appointment: "undefined",
          state: EnumState.INSERTED
        }
    }
    API.graphql(graphqlOperation(createMedicalConsultation, consultationData)).then( result =>{
      this.setState({modal9: false})
    }).catch( err => {
      console.log(err)
    });
  }

  render(){
    const { details, consultations } = this.state;
    const isEmpty = (details === '')


    const data = [].concat(consultations)
    .map((item,i)=> 
            <tr key={i}>
                <td>1</td>
                <td>{item.secretary}</td>
                <td>{item.state}</td>
                <td>{item.date_of_medical_appointment}</td>
            </tr>
    )



    return (
      <MDBContainer>
        <MDBContainer>
        <MDBCardHeader className="border-0 font-weight-bold d-flex justify-content-between">
          <p className="mr-4 mb-0">About the author</p>
          <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia >
            <img className="card-img-100 d-flex z-depth-1 mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="" />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold mt-0">
              Danny Newman
            </h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
            magnam.
            
          </MDBMedia>
          <div className="text-center mt-4">
            <MDBBtn color="primary" rounded onClick={this.toggle(9)}>Create Consultation</MDBBtn>
          </div>
          <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="bottom">
            <MDBModalHeader toggle={this.toggle(9)}>CONSULTING REQUEST</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
              <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">Complete the Form Data</p>
              </MDBCardHeader>
                <div className="form-group">
                  <label htmlFor="replyFormComment">Explain your situation or the reason for your consultation</label>
                  <textarea className="form-control" id="replyFormComment" rows="5" value={details} onChange={event => this.setState(updateByPropertyName("details", event.target.value))}></textarea>
                </div>
      
                <label htmlFor="replyFormName">Your name</label>
                <input type="email" id="replyFormName" className="form-control" />

                <label htmlFor="replyFormEmail">Your e-mail</label>
                <input type="email" id="replyFormEmail" className="form-control" />
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <div className="text-center mt-4">
                <MDBBtn disabled={isEmpty} onClick={this.CreateConsultation} color="primary" >Create</MDBBtn>
              </div>
            </MDBModalFooter>
          </MDBModal>
        </MDBMedia>
        <MDBContainer  md="9" lg="7" xl="5" className="mx-auto mt-3">
          <MDBTable>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Secrcetary</th>
                <th>State</th>
                <th>Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {data}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      </MDBContainer>
      </MDBContainer>
    );
  }
}

export default ConsultingRoom;