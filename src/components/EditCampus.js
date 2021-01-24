import React, { Component } from "react";
import SingleCampus from "./SingleCampus";
import { getSingleCampus, updateCampus } from "../redux/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        name: this.props.singleCampus.name,
        id: this.props.singleCampus.id,
        imageUrl: this.props.singleCampus.imageUrl,
        address: this.props.singleCampus.address,
        description: this.props.singleCampus.description,
      },
      redirect: false,
    };
  }

  async componentDidMount() {
    this.props.getSingleCampus(this.props.match.params.id);
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

    this.props.update(this.state.obj, this.props.singleCampus.id);
    this.setState({ redirect: true });
  };

  render() {
    console.log(this.state);
    if (!this.props.singleCampus) return <p>Loading...</p>;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Campus Name:</label>
          <input
            name="name"
            value={this.state.name}
            placeholder={this.props.singleCampus.name}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Campus Location:</label>
          <input
            name="address"
            placeholder={this.props.singleCampus.address}
            value={this.state.address}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Image Url:</label>
          <input
            name="imageUrl"
            type="url"
            placeholder={this.props.singleCampus.imageUrl}
            value={this.state.imageUrl}
            onChange={(e) => this.handleChange(e)}
          ></input>
          <label>Campus Description:</label>
          <input
            name="description"
            placeholder={this.props.singleCampus.description}
            value={this.state.description}
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
    singleCampus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleCampus: (id) => dispatch(getSingleCampus(id)),
    update: (obj, id) => dispatch(updateCampus(obj, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
