import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampus, getSingleCampus } from "../redux/reducers";
import { Link, Redirect } from "react-router-dom";

class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  async componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getSingleCampus(id);
  }

  deleteCampus = () => {
    this.props.delete(this.props.singleCampus.id);
    this.setState({ redirect: true });
  };

  render() {
    // if (this.state.redirect) return <Redirect to="/campuses"></Redirect>;
    if (this.props.singleCampus && this.props.singleCampus.students)
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
          <button onClick={this.deleteCampus}>DELETE</button>
          <Link to={`/campus/edit/${this.props.singleCampus.id}`}>
            <button>EDIT</button>
          </Link>
          <br />
          <div>
            Students:
            {this.props.singleCampus.students.map((item) => {
              return (
                <Link to={`/students/${item.id}`}>
                  <div>
                    {item.lastName} {item.firstName}
                  </div>
                </Link>
              );
            })}
          </div>
          {this.props.singleCampus.students.length === 0
            ? "no students enrolled"
            : ""}
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
    delete: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
