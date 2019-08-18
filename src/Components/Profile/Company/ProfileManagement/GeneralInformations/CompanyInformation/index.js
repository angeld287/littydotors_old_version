import React, {Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBAlert } from "mdbreact";

import { Link } from 'react-router-dom';
import { Auth } from "aws-amplify";

import { API, graphqlOperation } from "aws-amplify";

import { updateConsultingRoom } from '../../../../../../graphql/mutations';

//import FancyComponent from '../../../../../GoogleMap/index.js';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class CompanyInformation extends Component {
  constructor(props){
    super(props);
    this.state = {
      secretary: this.props.childProps.state.secretary,
      error: "",
      userExist: true,
      NoSecretary: (this.props.childProps.state.secretary === 'dummy'),
      lat: null,
      lng: null
    };
  }

  
  componentWillMount = () => {
    //console.log(this.props.childProps.state.stripe_subscription_id)
  }

  AddSecretary = () => {
    //console.log(this.state.secretary)
      Auth.signIn(this.state.secretary, 'FALSE_PASSWORD').then().catch(err => {
        
        this.setState({ 
          error: err.message, 
          userExist: (!(err.code === "UserNotFoundException")) && (err.code === "NotAuthorizedException")
         });

         // agregar secretaria al consultorio
         if(this.state.userExist){

          //console.log(this.props.childProps.state.id)
          const UpdateConsultingR = {
            input:{
              id: this.props.childProps.state.id,
              secretary: this.state.secretary,
            }
          }
          API.graphql(graphqlOperation(updateConsultingRoom, UpdateConsultingR)).then( data =>{
            this.setState({ 
              NoSecretary: false, 
            });
          })
         }
      })
  
}

  render() {

    const {location, doctorname, speciality, stripe_subscription_id, email} = this.props.childProps.state
    
    const subscribed = (stripe_subscription_id !== 'undefined' &&
    stripe_subscription_id !== undefined && 
    stripe_subscription_id !== '' && 
    stripe_subscription_id !== null) 

    const {secretary, userExist, NoSecretary} = this.state

    const data = String(location);
    const locationUrl = data.split(' ').join('%20');
    const mapUrl = "https://maps.google.com/maps?q="+locationUrl+"&t=&z=18&ie=UTF8&iwloc=&output=embed";
    

    return (
      <section className="my-5">
        {!subscribed && 
        <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBBtn >
                <Link to={"/subscribe"}>Complete las Imformaciones Requeridas</Link>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        }
        {subscribed && 
        <MDBRow>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header blue accent-1">
                  <h3 className="mt-2">
                    {/* <MDBIcon icon="envelope" /> */} Informacion General
                  </h3>
                </div>
               {
                 NoSecretary && 
                 <div className="md-form">
                   <MDBCard>
                     <MDBCardBody>
                       <MDBInput
                         label="Secretaria"
                         value={secretary} onChange={event => this.setState(updateByPropertyName("secretary", event.target.value))}
                         iconClass="grey-text"
                         type="text"
                         id="form-email"
                       />
                       <p className="dark-grey-text">
                         digite el nombre de usuario de la secretaria
                       </p>
                       {userExist === false && <MDBAlert color="danger">Nombre de usuario no existe. Verifique el nombre e intente de nuevo</MDBAlert>}
                       <MDBBtn onClick={() => this.AddSecretary()}>
                         Agregar Secretaria
                       </MDBBtn>
                     </MDBCardBody>
                   </MDBCard>
                 </div>
               }
               {!NoSecretary &&
                <div>
                  <div className="md-form">
                    <MDBInput
                      icon="user-md"
                      label={doctorname}
                      iconClass="grey-text"
                      type="text"
                      disabled
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="stethoscope"
                      label={speciality}
                      iconClass="grey-text"
                      type="text"
                      disabled
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="user-nurse"
                      label={secretary}
                      iconClass="grey-text"
                      type="text"
                      disabled
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="location-arrow"
                      label={location}
                      iconClass="grey-text"
                      type="textarea"
                      disabled
                      id="form-text"
                    />
                  </div>
                </div>
               }
                {/* <div className="text-center">
                  <MDBBtn color="light-blue">Submit</MDBBtn>
                </div> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              {/* <FancyComponent childProps={this.props.childProps}/> */}
              <iframe
                src={mapUrl}
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              {/* <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 01 234 567 89</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </MDBCol> */}
              <MDBCol md="6">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>{email}</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>}
      </section>
    );
  }
}

export default CompanyInformation;