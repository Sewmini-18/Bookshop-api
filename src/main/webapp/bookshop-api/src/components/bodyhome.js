import React from 'react';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

class BodyHome extends React.Component {

    constructor(props) {
        super(props);
        var today = new Date().getDate();

    this.state = {

      currentDate: today

    }
    }
    render() {
        const txt={
            fontWeight:'700',
            fontSize :'20px',
            
            }
        return (
            <Row>
                <Jumbotron>
                    <h1>
                            <span class="fa-layers fa-fw" >
                            <FontAwesomeIcon icon={faCalendar} transform="grow-2 right-0 up-2" />
                            <span  class="fa-layers-text fa-inverse" transform="shrink-10 down-40" style={txt}>
                            {this.state.currentDate}
                            </span>
                        </span>&nbsp;
                        Hello, world! 
                        </h1>
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