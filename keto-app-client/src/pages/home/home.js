import React, { Component } from "react";
//import Jumbotron from "../../components/jumbotron";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import { FormBtn } from "../../components/form"
import { Button } from 'reactstrap';
class Home extends Component {
    /*constructor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = 'newPath';
        this.props.history.push(path);
    }*/

    render() {
        return (
            
            <div className="app flex-row align-items-center">
              <Container fluid>
                
                <Row>
                  <Col>
                                     
                    <Button className ="btn btn-primary" color="primary" className="px-4"
                      //onClick={this.routeChange}
                        >
                        Start
                      </Button>
                  </Col>
                </Row>
                
                </Container>
            </div>
        );
    }
}

export default withRouter(Home);