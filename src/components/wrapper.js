'use strict';

let React = require('react');

const Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrapper;