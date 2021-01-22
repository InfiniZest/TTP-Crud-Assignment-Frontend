import React, { Component } from "react";
import { Link } from "react-router-dom";

class DisplayStudent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const myLink = `/campuses/${this.props.id}`;
    return (
      <div>
        <img src={this.props.imageUrl} alt="campus image"></img>
        <br />
            <p>{this.props.name}</p>
        <br />
            <p>{this.props.key}</p>
      </div>
    );
  }
}

export default DisplayStudent;
