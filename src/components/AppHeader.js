import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AppHeader extends Component {
    render() {
        return (
            <div className="Header">
                <div className="HeaderHomepage">
                    <Link to="/">Home</Link>
                </div>
                <div className="HeaderOptions">
                    <div className="CampusLink">
                        <Link to="/campuses">Campuses</Link>
                    </div>
                    <div>
                        <Link to="/students">Students</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppHeader;
