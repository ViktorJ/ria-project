var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var Navigation = require('react-router').Navigation;

var LoginComponent = React.createClass({
    mixins: [Navigation],
    getInitialState: function(){
        return {alertClass: "alert alert-info",
                logedin: "User is not logged in"};
    },
    redirect: function(){
        this.props.history.pushState(null, '/welcome');
    },
    handleSubmit: function(e){
        e.preventDefault();
        
        var user = {
            email   : this.refs.email.value,
            password: this.refs.password.value
        };
        
        this.firebaseRef = new Firebase("https://sizzling-torch-6425.firebaseio.com");
        var authData = this.firebaseRef.getAuth();
        
        var self = this;
        function authHandler(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            self.setState({alertClass: "alert alert-danger",
                logedin: "Login failed, please try again."});
          } else {
              console.log("Authenticated successfully with email: ", authData.password.email);
              self.props.history.pushState(null, '/welcome');
          }
        }
        this.firebaseRef.authWithPassword(user, authHandler);
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

var Welcome = React.createClass({
    render: function(){
        return (
            <h1>Welcome!</h1>
        );
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={LoginComponent} />
        <Route path="/welcome" component={Welcome} />
    </Router>
), document.getElementById('content'));