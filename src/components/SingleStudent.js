import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {
  deleteStudent,
  getSingleCampus,
  getSingleStudent,
} from "../redux/reducers";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    await this.props.getSingleStudent(id);
  }

  deleteStudent = () => {
    this.props.delete(this.props.singleStudent.id);
  };
  render() {
    if (this.state.redirect) return <Redirect to="/students"></Redirect>;
    else if (this.props.singleStudent)
      return (
        <div>
          Last Name: {this.props.singleStudent.lastName}
          <br />
          First Name: {this.props.singleStudent.firstName}
          <br />
          Email: {this.props.singleStudent.email}
          <br />
          GPA:{" "}
          {this.props.singleStudent.gpa
            ? this.props.singleStudent.gpa
            : "unavailable"}
          <br />
          Campus Name:{" "}
          {this.props.singleStudent.campus
            ? this.props.singleStudent.campus.name
            : "not enrolled in any campus"}
          <br />
          <img
            src={this.props.singleStudent.imageUrl}
            alt="student image"
            width="200px"
          ></img>
          <br />
          <Link to={`/student/edit/${this.props.id}`}>
            <button>EDIT</button>
          </Link>
          <button onClick={this.deleteStudent}>DELETE</button>
        </div>
      );
    else return <p>Student Not Found</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
    campus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleStudent: (id) => dispatch(getSingleStudent(id)),
    delete: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
