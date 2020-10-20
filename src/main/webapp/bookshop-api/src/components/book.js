import React from 'react';
import { Container, Card, Form, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

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
                    <Card.Header>Add Book</Card.Header>
                    <Form onSubmit={this.submitBook} id="BookFormId" >
                        <Card.Body>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Title</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="title" value={this.state.title} onChange={this.bookChange} placeholder="Book name" required />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAuthor">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Author</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="author" value={this.state.author} onChange={this.bookChange} placeholder="Author name" required />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Price</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="price" value={this.state.price} onChange={this.bookChange} placeholder="Price" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridIsbn">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ISBN No</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="isbn" value={this.state.isbn} onChange={this.bookChange} placeholder="ISBN Number" required />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUrl">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Cover Photo URL</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="url" value={this.state.url} onChange={this.bookChange} placeholder="url of cover photo" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOther">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Other Info</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="test" name="other" value={this.state.other} onChange={this.bookChange} placeholder="Other information" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTags">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Tags</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl name="tags" type="test" value={this.state.tags} onChange={this.bookChange} placeholder="tags ( Eg: fantacy, novel, kids, biography etc. )" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>



                        </Card.Body>
                        <Card.Footer style={{ "text-align": "right" }}>
                            <Button variant="danger" type="reset" onClick={this.onResetClick.bind(this)} > Clear</Button>{" "}
                            <Button variant="success" type="submit"> Submit</Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        );
    }
}

export default Book;