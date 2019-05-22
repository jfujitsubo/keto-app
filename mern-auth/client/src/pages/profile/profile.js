import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Profile extends Component {
 /* constructor() {
  super();
  this.state = {
    height: "",
    weight: "",
    errors: {}
  };
}

componentWillReceiveProps(nextProps) {
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newStats = {
      height: this.state.email,
      weight: this.state.password
    };

    this.props.userProfile(newStats, this.props.history);
  };*/
  
  render() {
        
    //const { errors } = this.state;
      
    return (
          <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Create</b> profile below
              </h4>
              
            </div>
        <form /*noValidate onSubmit={this.onSubmit}*/>
              <div className="input-field col s12">
                <input
                  //onChange={this.onChange}
                  //value={this.state.height}
                  //error={errors.height}
                  //id="height"
                  //type="height"
                  //className={classnames("", {
                  //invalid: errors.height || errors.heightnotfound
                  //})}
                />
                <label htmlFor="height">Height</label>
               {/* <span className="red-text">
                  {errors.height}
                  {errors.heightnotfound}}
                  </span> */}
              </div>
              <div className="input-field col s12">
                <input
                  /*onChange={this.onChange}*/
                  //value=""//{this.state.weight}
                  //error={errors.weight}
                  //id="weight"
                  //type="weight"
                  //className={classnames("", {
                    //invalid: errors.weight || errors.weightincorrect
                  //})}
                />
                <label htmlFor="weight">Weight</label>
                <span className="red-text">
                  {/*{errors.weight}
                  {errors.weightincorrect}*/}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue lighten-2 text-white"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>  
          
          /*<header className="jumbotron my-4">
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
          <button className = "btn btn-small waves-effect waves-light hoverable blue lighten-2 text-white">Submit</button>
        </Form>
      </Container>
      </header>*/
        );
    }
}
    
export default Profile;