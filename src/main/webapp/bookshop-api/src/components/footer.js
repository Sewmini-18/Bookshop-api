import React from 'react';
import {Navbar, Col} from 'react-bootstrap'

class Footer extends React.Component{
render(){
    return(

<Navbar fixed="bottom" bg="primary" >
   <Col lg={12} className="text-light text-center">Book shop website</Col>
  </Navbar>

    );
}
}


export default Footer;