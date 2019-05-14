import React, { Component } from "react";
import { Jumbotron } from "../../components/jumbotron";
import { withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/grid";
import { FormBtn } from "../../components/form"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <Jumbotron>
        <h2>Register</h2>
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
      </Jumbotron>
        );
    }
}
    
export default Main;