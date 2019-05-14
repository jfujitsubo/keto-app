import React from "react";
import { Col, Row, Container, Card } from "../grid";

export const Jumbotron = () => (
  <header className="jumbotron my-4">
  <h1 className="display-3">Welcome User</h1>
              <Row>
                <Col size = "md-3">
                    <Card />
                </Col>
                <Col size = "md-3">
                    <Card />
                </Col>
                <Col size = "md-3">
                    
                </Col>
                <Col size = "md-3">
                    
                </Col>
              </Row>
  <a href="#" className="btn btn-primary btn-lg">Add your own Meal</a>
</header>
);

