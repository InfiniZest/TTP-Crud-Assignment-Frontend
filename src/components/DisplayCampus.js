import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { deleteCampus } from "../redux/reducers";
import { connect } from "react-redux";

class DisplayCampus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  handleClick = () => {
    this.props.delete(this.props.id);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/campuses"></Redirect>;
    else {
      const myLink = `/campuses/${this.props.id}`;
      return (
        <div className="singleCampus">
          Campus Name: {this.props.name}
          <br />
          <img src={this.props.imageUrl} alt="campus image" width="150px"></img>
          <br />
          Students: {this.props.students.length}
          <br />
          <button onClick={this.handleClick}>DELETE</button>
          <Link to={`campus/edit/${this.props.id}`}>
            <button>EDIT</button>
          </Link>
          <br />
          <Link to={myLink}>View Campus</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCampus);
