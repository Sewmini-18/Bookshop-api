import React from 'react';
import {Row, Col, Jumbotron, Button} from 'react-bootstrap'

class BodyHome extends React.Component{
render(){

    return(
   <Row>
     <Jumbotron>
         <h1>Hello, world!</h1>
            <p>
               This is a simple hero unit, a simple jumbotron-style component for calling
               extra attention to featured content or information. content or information.
               content or information.
              <Button variant="link">Link</Button>
             </p>

      </Jumbotron>

   </Row>

    );
}
}


export default BodyHome;