import React from 'react';
import {Navbar, Button, ButtonGroup, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component{
render(){
    return(
    <Navbar bg="primary" variant="dark">
    <Link to={""} className="navbar-brand">
    <Col><Navbar.Brand  Active ><FontAwesomeIcon icon={faHome} className="fa-2x"/></Navbar.Brand></Col>
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