import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


class Card extends Component {

    state = {
        modal16: false
    }

    render(){
        return (
            (this.props.childProps.listModules !== null)?([].concat(this.props.childProps.listModules)
            .map((item,i)=> 
                <MDBCol key={i}>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                        <MDBCardTitle>{item.name}</MDBCardTitle>
                        <MDBCardText>
                            {item.description}
                        </MDBCardText>
                        <MDBBtn onClick={(e) => {
                            e.preventDefault();
                            this.props.toggleOpen(item);
                        }}>MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            )):(<h1>No Data</h1>)
        )
    }
}

export default Card;