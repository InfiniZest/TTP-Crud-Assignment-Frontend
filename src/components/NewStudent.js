import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NewStudent extends Component {
    constructor(props) {
        super(props);
        this.handleStudentNameChange = this.handleStudentNameChange.bind(this);
        this.handleNameOnSubmit = this.handleNameOnSubmit.bind(this);
        this.state = {
                        studentName: "",
                        gpa: null,
                        profileImageURL: "",
                        studentFieldError: ""
                    };
    }
    
    handleStudentNameChange(event) {
        this.setState({studentName: event.target.value});
        if(!event.target.value.includes(" ") && event.target.value.length !== 0)
            this.setState({studentNameError: "Please add a single space between your first and last name"});
        else
            this.setState({studentNameError: ""});
            
    }
    
    // TODO
    handleGPAChange(event) {
        this.setState({studentName: event.target.value});
        if(!event.target.value.includes(" ") && event.target.value.length !== 0)
            this.setState({studentNameError: "Please add a single space between your first and last name"});
        else
            this.setState({studentNameError: ""});
            
    }
    
    // TODO
    handleProfileImageChange(event) {
        this.setState({studentName: event.target.value});
        if(!event.target.value.includes(" ") && event.target.value.length !== 0)
            this.setState({studentNameError: "Please add a single space between your first and last name"});
        else
            this.setState({studentNameError: ""});
            
    }
    
    handleNameOnSubmit(event) {
        
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleNameOnSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleStudentNameChange}/>
                    </label>
                        <input type="submit" value="Submit" className="submitNewStudent"/>
                </form>
                <p>{this.state.studentNameError}</p>
            </div>
        );
    }
}

export default NewStudent;
