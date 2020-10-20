import React from 'react';
import {Col} from 'react-bootstrap'

class Book extends React.Component{
render(){
const mTop={
    marginTop:"20px"
    }
    return(
<div>

       <Col sm={6} style={mTop}></Col>
<div className="text-dark">
        Add Books
        </div>
</div>
    );
}
}

export default Book;