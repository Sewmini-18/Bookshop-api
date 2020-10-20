import React from 'react';
import { Card, Container, Table } from 'react-bootstrap'

class BookList extends React.Component {
    render() {

        return (
            <Container>

                <Card >
                    <Card.Header>This is some text within a card body.</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover  size="sm">
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