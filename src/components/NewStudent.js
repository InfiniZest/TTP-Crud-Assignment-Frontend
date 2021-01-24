import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNewStudent, getAllCampuses } from "../redux/reducers";

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        gpa: null,
        campusId: null,
      },
      render: false,
    };
  }

  async componentDidMount() {
    await this.props.getCampuses();
    this.setState({ render: true });
  }

  handleChange = (e) => {
    const updatedObj = { ...this.state.obj };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedObj[inputField] = inputValue;

    this.setState({ obj: updatedObj });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNew(this.state.obj);
    this.submitted();
  };

  submitted = () => {
    console.log("i got called");
    this.setState({ redirect: true });
  };

  render() {
    // console.log(this.props.campuses);
    // if (this.state.render)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input
            name="firstName"
            value={this.state.obj.firstName}
            onChange={this.handleChange}
          ></input>
          <label>Last Name: </label>
          <input
            name="lastName"
            value={this.state.obj.lastName}
            onChange={this.handleChange}
          ></input>
          <label>Email: </label>
          <input
            name="email"
            value={this.state.obj.email}
            onChange={this.handleChange}
          ></input>
          <label>Campus ID: </label>
          <input
            name="campusId"
            value={this.state.obj.campusId}
            onChange={this.handleChange}
          ></input>
          <label>GPA: </label>
          <input
            name="gpa"
            value={this.state.obj.gpa}
            onChange={this.handleChange}
          ></input>
          <label>Image URL: </label>
          <input
            name="imageUrl"
            value={this.state.obj.imageUrl}
            onChange={this.handleChange}
          ></input>
          {/* {this.props.campuses ? (
              <select>
                {this.props.campuses.map((item) => {
                  return <option>{item.name}</option>;
                })}
              </select>
            ) : (
              ""
            )} */}

          <input type="submit" value="Submit"></input>
        </form>
        {/* {this.state.redirect ? (
          <Redirect
            to={`/students/${this.props.singleStudent.id + 1}`}
          ></Redirect>
        ) : (
          ""
        )} */}
      </div>
    );
    // else return <p>Loading ...</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    singleStudent: state.singleStudent,
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (obj) => dispatch(addNewStudent(obj)),
    getCampuses: () => dispatch(getAllCampuses),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
