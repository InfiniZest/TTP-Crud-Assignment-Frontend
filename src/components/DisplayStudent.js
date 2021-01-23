import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myLink = `/students/${this.props.id}`;
    return (
      <div>
        Last Name: {this.props.lastName}
        <br />
        First Name: {this.props.firstName}
        <br />
        <button>DELETE</button>
        <button>EDIT</button>
        <br />
        <Link to={myLink}>View Student</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => console.log("hey"),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayStudent);
