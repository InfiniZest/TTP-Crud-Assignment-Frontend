import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCampuses, addNewCampus } from "../redux/reducers";
import { Link } from "react-router-dom";

import DisplayCampus from "./DisplayCampus";
import NewCampus from "./NewCampus";

class AllCampuses extends Component {
  async componentDidMount() {
    await this.props.getAll();
    // await this.props.addNewCampus;
  }

  render() {
    console.log(this.props);
    if (this.props.campuses.length > 0)
      return (
        <div>
          <Link to="/campuses/new">
            <button>Add New Campus</button>
          </Link>

          {this.props.campuses.map((item, index) => {
            return (
              <DisplayCampus
                key={index}
                name={item.name}
                imageUrl={item.imageUrl}
                id={item.id}
                students={item.students}
              />
            );
          })}
        </div>
      );
    else
      return (
        <div>
          <Link to="/campuses/new">
            <button>Add New Campus</button>
          </Link>
          <p> No Campuses Found</p>
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
    getAll: () => dispatch(getAllCampuses()),
    addNew: () => dispatch(addNewCampus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

// export default AllCampuses;
