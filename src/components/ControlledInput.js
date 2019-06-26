import React, { Component } from "react";

export default class ControlledInput extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input onChange={this.handleChange} placeholder="First Name" type="text" name="firstName" value={this.state.firstName} /><br></br>
        <input onChange={this.handleChange} placeholder="Last Name" type="text" name="lastName" value={this.state.lastName} /><br></br>
      </form>
    );
  }
}
