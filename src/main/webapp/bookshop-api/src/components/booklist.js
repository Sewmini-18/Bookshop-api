import React from 'react';
import {Col} from 'react-bootstrap'

class BookList extends React.Component{
render(){
const mTop={
    marginTop:"20px"
    }
    return(

        <div>

               <Col sm={6} style={mTop}></Col>
        <div className="text-dark">
                Book List
                </div>
        </div>
    );
}
}

export default BookList;