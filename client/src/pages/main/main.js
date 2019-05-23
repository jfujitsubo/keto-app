import React, { Component } from "react";
import { Jumbotron } from "../../components/jumbotron";
import { Col, Row, Container, Meals } from "../../components/grid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";



class Main extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render() {
        const { user } = this.props.auth;
        
        return (
        <Container>
            <div className="row">
            <div className="col s12 center-align">
              <h4>
                {/*Welcomes user by first name*/}
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into the{" "}
                  <span style={{ fontFamily: "monospace" }}>KetoPal</span> app.
                </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-small waves-effect waves-light hoverable red lighten-2 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        
        
        
    <Jumbotron />
            <Row>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            <Col size = "md-2 sm-12">
            <Meals />
            </Col>
            </Row>
</Container>
        );
    }
}
    
Main.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Main);