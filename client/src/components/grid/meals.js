import React from "react";
import { Col, Row } from "../grid";

export const Meals = () => (
  <div className="card h-100">
     <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
     <div className="card-body">
       <h6 className="card-title">Meals</h6>
       <Row>
       <Col size = "md-6">
       <p className="card-text">
       <ul className = "list-inline">
               <li>Cals:</li>
               <li>Fats:</li>
               <li>Proteins:</li>
               <li>Carbs:</li>
           </ul>
       </p>
       </Col>
       <Col size = "md-6">
           <a href="" className="btn btn-small waves-effect waves-light hoverable blue lighten-2 text-white">Add</a>
       </Col>
       </Row>
     </div>
 </div>
);
