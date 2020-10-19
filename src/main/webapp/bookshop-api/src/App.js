import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import {Container, Row, Jumbotron, Col,Button} from 'react-bootstrap'


function App() {
const mTop={
    marginTop:"20px",
    marginLeft:"100px"
    }
  return (
    <div className="App">
    <NavBar/>
      <Container>
      <Row>
      <Col sm={6} style={mTop}>
      </Col>

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
      <Row>
            <Col sm={6} style={mTop}>
            </Col>

              <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                          This is a simple hero unit, a simple jumbotron-style component for calling
                          extra attention to featured content or information.content or information. content or information.
                          <Button variant="link">Link</Button>
                        </p>
                      </Jumbotron>

            </Row>
      </Container>
    </div>
  );
}

export default App;
