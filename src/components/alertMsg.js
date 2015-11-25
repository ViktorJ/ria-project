var React = require("react");

var AlertMsg = React.createClass({
    render: function(){
        return (
            <div className={this.props.alertClass}>{this.props.logedin}</div>
        );
    }
});

module.exports = AlertMsg;