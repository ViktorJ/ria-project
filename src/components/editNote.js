"use strict"

let React = require("react"),
    ReactRedux = require('react-redux'),
    actions = require("../actions/actions"),
    Link = require('react-router').Link,
    Navbar = require('./navbar'),
    C = require("../constants");

const EditNote = React.createClass({
    getDefaultProps: function(){
        return {notes: {data: {title: "", content: ""}}};
    },
    handleSubmit: function(e){
        e.preventDefault();
        
        let note = {
            key: this.props.params.key,
            title: this.refs.noteTitle.value,
            content: this.refs.noteContent.value
        };
        
        this.props.submitEditNote(note);
        this.props.history.pushState(null, '/note/' + note.key);
    },
    render: function(){
        let note = this.props.notes.data.filter(function(n){
         return n.key == this.props.params.key;
         }.bind(this))[0];
        if (note) {
            return (
                <div className="editNote">
                    <Navbar />
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Note title</label>
                        <input type="text" className="form-control" ref="noteTitle" defaultValue={ note.title } required/>
                    </div>
                    <div className="form-group">
                        <label>Note</label>
                        <textarea className="form-control" rows="4" ref="noteContent" defaultValue={note.content } required/>
                    </div>
                    <Link to={"/note/" + note.key}>
                    <button type="button" className="btn btn-default"><i
                            className="fa fa-angle-double-left"></i> Back</button>
                    </Link>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-check"></i> Submit</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="editNote">
                    <Navbar />
                    <h1><i className="fa fa-spinner fa-3x fa-spin"></i></h1>
                </div>
            )
        }
    }
});

let mapStateToProps = function (state) {
    return {
        notes: state.notes
    };
};

let mapDispatchToProps = function (dispatch) {
    return {
       submitEditNote: function(note){
            dispatch(actions.submitEditNote(note));
        }
    }
};


module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditNote);