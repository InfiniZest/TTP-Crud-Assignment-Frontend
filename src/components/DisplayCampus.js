import React, { Component } from "react";
import { Link } from "react-router-dom";

class DisplayCampus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myLink = `/campuses/${this.props.id}`;
    return (
      <div>
        Campus Name: {this.props.name}
        <br />
        <img src={this.props.imageUrl} alt="campus image"></img>
        <br />
        <button>DELETE</button>
        <button>EDIT</button>
        <br />
        <Link to={myLink}>View Campus</Link>
      </div>
    );
  }
}

export default DisplayCampus;
