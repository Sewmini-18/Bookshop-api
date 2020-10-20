import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import BodyHome from './components/bodyhome';
import Footer from './components/footer';
import Book from './components/book';
import BookList from './components/booklist';
import {Container, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
const mTop={
    marginTop:"20px"
    }
  return (
    <Router>
    <NavBar/>
      <Container>
      <Row>
       <Col sm={6} style={mTop}></Col>
      <Switch>
        <Route path="/" exact component={BodyHome}/>
        <Route path="/add" exact component={Book}/>
        <Route path="/list" exact component={BookList}/>
      </Switch>

             </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
