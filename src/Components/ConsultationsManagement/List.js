import React, {Component} from "react";
import { MDBNavLink, MDBTable, MDBTableBody, MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge, MDBIcon } from "mdbreact";

import moment from 'moment';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "1",
      redirect: false,
      consultations: null,
      selectedItem: "0",
    };

    this.details = this.details.bind(this);
  }

  componentDidMount = () => {
  }

  details(event, item, i){
    event.preventDefault();
    if (this.state.activeItem !== item) {
      this.setState({ 
          activeItem: item,
          selectedItem: i
        })
    }
    this.props.ActiveElement(item, i);
    if (item.read_secretary === false) {
      this.props.updateMedicalConsultationData({id: item.id, read_secretary: true}, "read"); 
    }
  }

  render(){
    const {selectedItem, data} = this.props.Consultations

    const lista = (data !== null)?([].concat(data)
    .sort((a, b) => new Date(...a.date_created.split('-').reverse()) - new Date(...b.date_created.split('-').reverse()))
    .map((item,i)=> 
        <tr
          key={i}
          onClick={(e) => {
              this.details(e, item, i)
          }} 
          >
          <td bgcolor={(selectedItem === i) ? ("#4285F4") : ("#fff")} 
              style={(selectedItem === i) ? ({color:"#fff", width: "80%"}) : ({color:"#000", width: "80%"})} 
              >
            {item.patient.name}
          </td>
          <td bgcolor={(selectedItem === i) ? ("#4285F4") : ("#fff")} style={(selectedItem === i) ? ({color:"#fff"}) : ({color:"#000"})}>
            {(item.read_secretary === false)?(<MDBIcon icon="bell" size="1x" className="red-text" /> ):(<MDBBadge color="primary" pill></MDBBadge>)}
          </td>
          <td bgcolor={(selectedItem === i) ? ("#4285F4") : ("#fff")} style={(selectedItem === i) ? ({color:"#fff", width: "80%"}) : ({color:"#000", width: "80%"})} >
            <small>{moment(item.date_of_medical_consultation).format('DD-MM')}   </small>
          </td>
        </tr>
    )):(<tr></tr>)

      return (
        <MDBContainer>
          <MDBTable scrollY
            maxHeight="400px">
            <MDBTableBody>
              {lista}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      );
    }
}

export default List;