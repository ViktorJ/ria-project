"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants"),
    Link = require('react-router').Link;

const Notes = React.createClass({
    componentWillMount: function(){
        this.notes = [];
        this.key = 0;
    },
    handleClick: function(note){
        this.props.viewNoteDetails(note);
    },
    render: function(){ 
        let note = this.props.notes.data;
        
        let self = this;
        if(this.props.notes.data){
            this.props.notes.data.forEach(function(data){
                self.key++;
                self.notes.push(<Link to="/note" key={self.key++}><div key={data.key} className="well" onClick={self.handleClick.bind(self, data)}>{data.title}</div></Link>);        
            });
        }
    
        return (
            <div className="notes">
                {note ? this.notes.reverse() : <i className="fa fa-spinner fa-3x fa-spin"></i>}
            </div>
        );
    }
});

let mapStateToProps = function(state){
    return {
        notes:state.notes,
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        viewNoteDetails: function(note){
            dispatch(actions.viewNoteDetails(note));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Notes);