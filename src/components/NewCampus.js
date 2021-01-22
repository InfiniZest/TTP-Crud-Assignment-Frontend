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
    this.setState({ redirect: true });

    // const index = this.props.campuses.length;

    // const link = `/campuses/${this.props.campuses[index - 1].id}`;
    // console.log(link);
    // <Redirect to={link}></Redirect>;
  };

  render() {
    console.log(this.state.redirect);
    //redirect to single campus view
    // if (this.state.redirect) <Redirect to="/campuses"></Redirect>;

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
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (obj) => dispatch(addNewCampus(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);
