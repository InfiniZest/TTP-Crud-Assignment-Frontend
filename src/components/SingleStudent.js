import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleStudent } from "../redux/reducers";

class SingleStudent extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    await this.props.getSingleStudent(id);
  }
  render() {
    if (this.props.singleStudent)
      return (
        <div>
          Last Name: {this.props.singleStudent.lastName}
          <br />
          First Name: {this.props.singleStudent.firstName}
          <br />
          Email: {this.props.singleStudent.email}
          <br />
          GPA: {this.props.singleStudent.gpa}
          <br />
          <img
            src={this.props.singleStudent.imageUrl}
            alt="student image"
            width="200px"
          ></img>
          <br />
        </div>
      );
    else return <p>Student Not Found</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleStudent: (id) => dispatch(getSingleStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
