import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCampus } from "../redux/reducers";

class SingleCampus extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    await this.props.getSingleCampus(id);
  }
  render() {
    if (this.props.singleCampus)
      return (
        <div>
          Campus Name: {this.props.singleCampus.name}
          <br />
          Address: {this.props.singleCampus.address}
          <br />
          Description: {this.props.singleCampus.description}
          <br />
          <img
            src={this.props.singleCampus.imageUrl}
            alt="campus image"
            width="200px"
          ></img>
          <br />
        </div>
      );
    else return <p>Campus Not Found</p>;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
