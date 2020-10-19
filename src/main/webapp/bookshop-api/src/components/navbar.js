import React from 'react';
import {Navbar, Nav,Button, ButtonGroup, Col} from 'react-bootstrap'

class NavBar extends React.Component{
render(){
    return(
    <Navbar bg="primary" variant="dark">
        <Col><Navbar.Brand href="#home" Active >Home</Navbar.Brand></Col>

        <ButtonGroup>
         <Button variant="outline-dark" size="lg" >
                   Bool List
                  </Button>
                  <Button variant="outline-dark" size="lg" >
                   Add Book
                  </Button>
        </ButtonGroup>




      </Navbar>
    );
}
}


export default NavBar;