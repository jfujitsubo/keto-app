import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import { FormBtn } from "../../components/form"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <header className="jumbotron my-4">
            <Container className="App">
        <h2>Profile</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Height <small class = "text-muted ">in inches</small></Label>
              <Input
                type="height"
                name="height"
                id="exampleHeight"
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleWeight">Weight <small class = "text-muted">in lbs</small></Label>
              <Input
                type="weight"
                name="weight"
                id="exampleWeight"
                placeholder=""
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
      </header>
        );
    }
}
    
export default Profile;