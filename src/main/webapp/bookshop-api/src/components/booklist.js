import React from 'react';
import { Card, Container, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

class BookList extends React.Component {
    render() {

        return (
            <Container>
                <Card.Header><FontAwesomeIcon icon={faList} /> Book List </Card.Header>
                <Card >
                    <Card.Body>
                        <Table striped bordered hover size="sm">
                            <thead ClassName="bg-dark">
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
                                <tr align="center">
                                    <td colSpan="6">No Books available.</td>
                                </tr>


                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default BookList;