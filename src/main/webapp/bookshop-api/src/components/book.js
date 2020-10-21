import React from 'react';
import ReactTooltip from 'react-tooltip';
import { Container, Card, Form,Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faDollarSign, faUserEdit,faBarcode,faFileImage, faTags, faInfoCircle,faBookOpen, faLocationArrow, faEraser } from '@fortawesome/free-solid-svg-icons'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', author: '', price: '', isbn: '', url: '', other: '', tags: '' };
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);

        this.initialState = {
            title: '', author: '', price: '', isbn: '', url: '', other: '', tags: '' 
        };
        this.state = this.initialState;
    }
    onResetClick(event) {
        event.preventDefault();
        this.setState(this.initialState);
    }
    submitBook(event) {
        alert(
            'title: '+ this.state.title+
            ', author: '+ this.state.author+
            ', price: '+ this.state.price+
            ', isbn: '+ this.state.isbn+
            ', url: '+ this.state.url+
            ', other: '+ this.state.other+
            ', tags: '+ this.state.tags

        );
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {

        return (
            <Container>
                <Card>
                    <Card.Header> &nbsp; &nbsp;<FontAwesomeIcon icon={faBookOpen} /> &nbsp;&nbsp;Add Book</Card.Header>
                    <Form onSubmit={this.submitBook} id="BookFormId" >
                        <Card.Body>
                        <ReactTooltip />
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend column xs={7}>
                                            <InputGroup.Text ><FontAwesomeIcon icon={faBook} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl  type="test" name="title" value={this.state.title} onChange={this.bookChange} placeholder="Book name" required />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text ><FontAwesomeIcon icon={faUserEdit} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test"  name="author" value={this.state.author} onChange={this.bookChange} placeholder="Author name" required />
                                    </InputGroup>
                                </Form.Group>
                                
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faDollarSign} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="price" value={this.state.price} onChange={this.bookChange} placeholder="Price" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridIsbn">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faBarcode} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="isbn" value={this.state.isbn} onChange={this.bookChange} placeholder="ISBN Number" required />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUrl">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faFileImage} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="url" value={this.state.url} onChange={this.bookChange} placeholder="url of cover photo" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOther">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faInfoCircle} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="other" value={this.state.other} onChange={this.bookChange} placeholder="Other information" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTags">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faTags} /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl name="tags" type="test" value={this.state.tags} onChange={this.bookChange} placeholder="tags ( Eg: fantacy, novel, kids, biography etc. )" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>



                        </Card.Body>
                        <Card.Footer style={{ "text-align": "right" }}>
                            <Button variant="danger" type="reset" onClick={this.onResetClick.bind(this)} > &nbsp; Clear <FontAwesomeIcon icon={faEraser} /></Button>{" "}
                            <Button variant="success" type="submit"> Submit <FontAwesomeIcon icon={faLocationArrow} /></Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        );
    }
}

export default Book;