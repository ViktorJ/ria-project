var React = require("react");
var Router = require('react-router').Router;
var Link = require('react-router').Link;
var AlertMsg = require("./alertmsg");
var myFirebase = "https://sizzling-torch-6425.firebaseio.com";

var CreateUser = React.createClass({
    getInitialState: function(){
        return {alertClass: "",
                logedin: ""};
    },
    handleCreateUser: function(e){
        e.preventDefault();
        
        var user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase(myFirebase);
        var authData = this.firebaseRef.getAuth();
        
        var self = this;
        this.firebaseRef.createUser(user, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
            self.setState({alertClass: "alert alert-danger",
                logedin: "Something went wrong, please try again."});
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            self.setState({alertClass: "alert alert-success",
                logedin: "You have created a new account. Please go back and login."});
          }
        });
    },
    render: function(){
        return (
            <div className="col-sm-6 col-md-6 col-lg-6">
                <h1>New account</h1>
                <h3>Fill in the form and submit to create a new account</h3>
                <form onSubmit={this.handleCreateUser}>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" ref="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Create</button>
                </form>
                <button className="btn btn-info"><Link to="/">Back</Link></button>
                <AlertMsg alertClass={this.state.alertClass} logedin={this.state.logedin}/>
            </div>
        );
    }
});

module.exports = CreateUser;