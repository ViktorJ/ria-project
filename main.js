var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

//var ReactFire = require('reactfire');

var WelcomeText = React.createClass({
  //  mixins: [ReactFireMixin],
    getInitialState: function(){
        return {alertClass: "alert alert-info",
                logedin: "User is not logged in"};
    },
    componentWillMount: function(){
        
        
    },
    handleSubmit: function(e){
        e.preventDefault();
        var isUser = false;
        var user = {
            email   : this.refs.email.value,
            password: this.refs.password.value};
        console.log(user);
        
        var firebaseRef = new Firebase("https://sizzling-torch-6425.firebaseio.com");
        var authData = firebaseRef.getAuth();
        
        function authHandler(error, authData, isUser) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
              isUser = true;
              console.log("Authenticated successfully with email: ", authData.password.email);
          }
        }
        firebaseRef.authWithPassword(user, authHandler);
        
        checkLogin(isUser);
        
        function checkLogin(isUser){
            if(isUser){
                this.setState({alertClass: "alert alert-success",
                logedin: "You are logged in!"});
            } else {
                this.setState({alertClass: "alert alert-danger",
                logedin: "Login failed!"});
            }
        }
    },
    render: function(){
        return (
            <div className="welcomeText col-sm-6 col-md-6 col-lg-6">
            <h1>Login</h1>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" ref="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" ref="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <AlertMsg alertClass={this.state.alertClass} logedin={this.state.logedin}/>
            </div>
        );
    }
});

var AlertMsg = React.createClass({
    render: function(){
        return (
            <div className={this.props.alertClass}>{this.props.logedin}</div>
        );
    }
});

ReactDOM.render(
    <WelcomeText />,
    document.getElementById('content')
);