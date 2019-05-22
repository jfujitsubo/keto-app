import React from "react";
import { Col, Row, Card } from "../grid";
import { Link } from "react-router-dom";

export const Jumbotron = () => (
  <header className="jumbotron my-4">
            <h6><Link to = "/profile">Click here to get your customized macros!</Link></h6>
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
  <a href="#" className="btn btn-small waves-effect waves-light hoverable blue lighten-2 text-white">Add your own Meal</a>
  
</header>
);

