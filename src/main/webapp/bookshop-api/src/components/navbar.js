import React from 'react';
import {Navbar, Nav,Button, ButtonGroup, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
render(){
    return(
    <Navbar bg="primary" variant="dark">
    <Link to={""} className="navbar-brand">
    <Col><Navbar.Brand  Active >Home</Navbar.Brand></Col>
    </Link>

<Navbar.Collapse className="justify-content-end">
    <ButtonGroup className="justify-content-end">
     <Button  variant="outline-dark" size="lg" as={Link} to="/list"> Book List </Button>
      <Button variant="outline-dark" size="lg" as={Link} to="/add"> Add Books </Button>
    </ButtonGroup>
  </Navbar.Collapse>





      </Navbar>
    );
}
}


export default NavBar;