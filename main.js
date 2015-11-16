var React = require('react');
var ReactDOM = require('react-dom');
//var ReactFire = require('reactfire');

var WelcomeText = React.createClass({
  //  mixins: [ReactFireMixin],
    getInitialState: function(){
        return {value: ""};
    },
    componentWillMount: function(){
        var firebaseRef = new Firebase("https://sizzling-torch-6425.firebaseio.com");
        
        var authData = firebaseRef.getAuth();
        
        if(authData){
        console.log("User " + authData.uid + " is logged in!");
        } else {
            console.log("User is not logged in!");
        }
        
        function authHandler(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        }
        
        firebaseRef.authWithPassword({
          email    : 'rotkivnossnaj@gmail.com',
          password : 'test'
        }, authHandler);
    },
    handleChange: function(e){
        this.setState({value: e.target.value});
    },
    render: function(){
        var value = this.state.value;
        return (
            <div className="welcomeText col-sm-6 col-md-6 col-lg-6">
            <h1>Login</h1>
            <form className="form-inline">
              <div className="form-group">
                <input type="text" className="form-control" ref="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        );
    }
});

ReactDOM.render(
    <WelcomeText />,
    document.getElementById('content')
);