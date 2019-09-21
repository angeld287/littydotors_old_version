import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBModalFooter, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard/* , MDBIcon */ } from "mdbreact";

import image_back from '../../../../../../images/modern-blue-medical-background.jpg';

import { Storage } from "aws-amplify";
import { S3Image } from 'aws-amplify-react';


class UserInformation extends Component {
state = {
  flipped: false
}



handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

/* componentWillMount = () => {
  Storage.get(this.props.childProps.state.image)
    .then(result => console.log(result))
    .catch(err => console.log(err));
} */


render() {

  const {image} = this.props.childProps.state

  const _image = (image !== null && image !== undefined)?(<S3Image imgKey={image} height="100" width="60" alt="" className="rounded-circle" />):(null);

  return (
    <MDBRow>
      <MDBCol style={{ minHeight: '26rem' }}>
        <MDBRotatingCard flipped={this.state.flipped} className="text-center h-100 w-100">
          <MDBCard className="face front">
            <MDBCardUp>
              <img className="card-img-top" src={image_back} alt="" />
            </MDBCardUp>
            <MDBAvatar className="mx-auto white" circle>
              {_image}
            </MDBAvatar>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">{ this.props.childProps.state.doctorname}</h4>
              <p className="font-weight-bold blue-text">{this.props.childProps.state.speciality}</p>
              {/* 
              <a href="" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="redo" /> Click here to rotate
              </a> */}
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
                <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por Creative_hat - www.freepik.es</a>
            </MDBModalFooter>
          </MDBCard>
          <MDBCard className="face back">
            <MDBCardBody>
              <h4 className="font-weight-bold">About me</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                dolores nihil quae in mollitia asperiores ut rerum
                repellendus, voluptatum eum, officia laudantium quaerat?
              </p>
              <hr />
              <ul className="list-inline py-2">
                <li className="list-inline-item">{/* 
                  <a href="" className="p-2 fa-lg fb-ic">
                    <MDBIcon icon="facebook" brand />
                  </a> */}
                </li>
                <li className="list-inline-item">{/* 
                  <a href="" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="twitter" brand />
                  </a> */}
                </li>
                <li className="list-inline-item">{/* 
                  <a href="" className="p-2 fa-lg gplus-ic">
                    <MDBIcon icon="google-plus" brand />
                  </a> */}
                </li>
                <li className="list-inline-item">{/* 
                  <a href="" className="p-2 fa-lg li-ic">
                    <MDBIcon icon="linkedin" brand />
                  </a> */}
                </li>
              </ul>{/* 
              <a href="" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="undo" /> Click here to rotate back
              </a> */}
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
                <a href="https://www.freepik.es/fotos-vectores-gratis/fondo">Vector de Fondo creado por Creative_hat - www.freepik.es</a>
            </MDBModalFooter>
          </MDBCard>
        </MDBRotatingCard>
      </MDBCol>
    </MDBRow>
    )
  }
}

export default UserInformation;