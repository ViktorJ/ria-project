var React = require("react");

var Alert = React.createClass({
    render: function(){
        return (
            <div className={this.props.alertClass}>{this.props.alertMsg}</div>
        );
    }
});

module.exports = Alert;