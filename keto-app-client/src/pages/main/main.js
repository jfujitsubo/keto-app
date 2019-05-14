import React, { Component } from "react";
import { Jumbotron } from "../../components/jumbotron";
import { withRouter } from "react-router-dom";
import { Col, Row, Container, Meals } from "../../components/grid";
import { FormBtn } from "../../components/form"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Main extends Component {
    render() {
        return (
        <Container fluid>
    <Jumbotron />
            <Row>
            <Col size = "md-3 sm-12">
            <Meals />
            </Col>
            <Col size = "md-3 sm-12">
            <Meals />
            </Col>
            <Col size = "md-3 sm-12">
            <Meals />
            </Col>
            <Col size = "md-3 sm-12">
            <Meals />
            </Col>
            </Row>
</Container>
        );
    }
}
    
export default Main;