import React, { Component } from "react";
import SingleCampus from "./SingleCampus";
import { getSingleStudent, updateStudent } from "../redux/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        firstName: this.props.singleStudent.firstName,
        lastName: this.props.singleStudent.lastName,
        id: this.props.singleStudent.id,
        imageUrl: this.props.singleStudent.imageUrl,
        email: this.props.singleStudent.email,
        campusId: this.props.singleStudent.campusId,
      },
      redirect: false,
    };
  }

  async componentDidMount() {
    this.props.getSingleStudent(this.props.match.params.id);
  }

  handleChange(e) {
    const updatedObj = { ...this.state.obj };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedObj[inputField] = inputValue;

    this.setState({ obj: updatedObj });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.update(this.state.obj, this.props.singleStudent.id);
    this.setState({ redirect: true });
  };

  render() {
    console.log(this.state);
    if (!this.props.singleStudent) return <p>Loading...</p>;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder={this.props.singleStudent.firstName}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Last Name:</label>
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder={this.props.singleStudent.lastName}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Email:</label>
          <input
            name="email"
            placeholder={this.props.singleStudent.email}
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Image Url:</label>
          <input
            name="imageUrl"
            type="url"
            placeholder={this.props.singleStudent.imageUrl}
            value={this.state.imageUrl}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>GPA:</label>
          <input
            name="gpa"
            placeholder={this.props.singleStudent.gpa}
            value={this.state.gpa}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Campus ID: </label>
          <input
            name="campusId"
            placeholder={this.props.singleStudent.campusId}
            value={this.state.campusId}
            onChange={(e) => this.handleChange(e)}
          ></input>

          <input type="submit" value="Save Changes"></input>
        </form>
      </div>
    );
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
    update: (obj, id) => dispatch(updateStudent(obj, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
