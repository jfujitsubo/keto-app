import React from "react";
import { Col, Row } from "../grid";

export const Card = () => (
   <div className="card h-100">
      <div className="card-body">
        <h4 className="card-title">Macros</h4>
        <Col size = "md-6">
        <p className="card-text">
        <ul>
                <li>Cals: </li>
                <li>Fats:</li>
                <li>Proteins:</li>
                <li>Carbs:</li>
            </ul>
        </p>
        </Col>
      </div>
  </div>
);