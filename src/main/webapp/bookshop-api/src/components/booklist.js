import React from 'react';
import { Card, Container, Table,ButtonGroup,Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTrash, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class BookList extends React.Component {

    constructor(props){
        super(props);
        this.state={
            books:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8081/rest/books")
        .then(response=>response.data)
        .then((data)=>{this.setState({books:data});
        });
    }
    render() {

        return (
            <Container>
                <Card >
                    <Card.Header >&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faList} /> &nbsp;<b> Book List</b>

                    </Card.Header>

                    <Card.Body>
                        <Table striped bordered hover size="sm">
                            <thead className="table-primary">
                                <tr>

                                    <th>Book Name</th>
                                    <th>Book Author</th>
                                    <th>Price</th>
                                    <th>ISBN No</th>
                                    <th>Tags</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody variant="secondary">
                                {
                                    this.state.books.length === 0 ?
                                
                                <tr align="center">
                                        <td colSpan="6">No Books available.</td>                                  
                                </tr> :
                                this.state.books.map((book)=>
                                <tr key={book.id}>
                                    <td>
                                        <Image src={book.coverPhotoURL} roundedCircle width="25" height="25"/>&nbsp;&nbsp;
                                        {book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book.isbnNumber}</td>
                                    <td>{book.tags}</td>
                                    <td align="center">
                                        <ButtonGroup >
                                            <Button size="sm" className="btn-info"><FontAwesomeIcon icon={faEdit} /></Button>
                                            <Button size="sm" className="btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                                )

                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default BookList;