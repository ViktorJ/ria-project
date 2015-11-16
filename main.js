var React = require('react');
var ReactDOM = require('react-dom');

var WelcomeText = React.createClass({
    getInitialState: function(){
        return {value: ""};
    },
    handleChange: function(e){
        this.setState({value: e.target.value});
    },
    render: function(){
        var value = this.state.value;
        return (
            <div className="welcomeText col-sm-6 col-md-6 col-lg-6">
            <h2>What is your name?</h2>
            <input type="text" ref="name" className="form-control" value={value} onChange={this.handleChange}/>
            <h1>Welcome {value}!</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <WelcomeText />,
    document.getElementById('content')
);