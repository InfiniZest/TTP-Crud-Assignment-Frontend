import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNewCampus } from "../redux/reducers";

class NewCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        name: "",
        address: "",
        description: "",
        imageUrl: "",
      },
      redirect: false,
    };
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

  shouldComponentRender() {
    console.log("should render");
  }

  render() {
    // if (this.state.redirect)
    //   return (
    //     <Redirect to={`/campuses/${this.props.singleCampus.id}`}></Redirect>
    //   );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Campus Name: </label>
          <input
            name="name"
            value={this.state.obj.name}
            onChange={this.handleChange}
          ></input>
          <label>Address: </label>
          <input
            name="address"
            value={this.state.obj.address}
            onChange={this.handleChange}
          ></input>
          <label>Description:</label>
          <input
            name="description"
            value={this.state.obj.description}
            onChange={this.handleChange}
          ></input>
          <label>Image Url:</label>
          <input
            name="imageUrl"
            value={this.state.obj.imageUrl}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    singleCampus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (obj) => dispatch(addNewCampus(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);
