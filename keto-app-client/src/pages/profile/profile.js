import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import { FormBtn } from "../../components/form"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Profile extends Component {
    render() {
        return (
            <Container className="App">
        <h2>Profile</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
        );
    }
}
    
export default Profile;