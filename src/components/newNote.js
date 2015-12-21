"use strict";

let React = require("react"),
    ReactRedux = require("react-redux"),
    actions = require("../actions/actions"),
    C = require("../constants");

const NewNote = React.createClass({
    getInitialState: function(){
        let note = this.props.notes.noteCurrentlyBeingEdited || {title: "", content: ""};
        return {title: note.title, content: note.content};
    },
    componentWillReceiveProps : function(nextProps){
        let note = this.props.notes.noteCurrentlyBeingEdited || {title: "", content: ""};
        this.setState({title: note.title, content: note.content});
    },
    handleSubmit: function(e){
        e.preventDefault();

        let note = Object.assign({}, this.props.notes.noteCurrentlyBeingEdited, {
            title: this.refs.noteTitle.value,
            content: this.refs.noteContent.value
        });
        if(this.props.notes.noteCurrentlyBeingEdited !== null){
            this.props.editNote(note);
        } else {
            this.props.submitNewNote(note);
        }
        
        this.refs.noteTitle.value = "";
        this.refs.noteContent.value = "";
        this.setState({title: "", content: ""});
    },
    handleChangeTitle: function(event){
        this.setState({title: event.target.value});
    },
    handleChangeContent: function(event){
        this.setState({content: event.target.value});
    },
    render: function(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Note title</label>
                    <input type="text" className="form-control" ref="noteTitle" value={ this.state.title } onChange={this.handleChangeTitle}/>
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <textarea className="form-control" rows="4" ref="noteContent" value={this.state.content } onChange={this.handleChangeContent}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

let mapStateToProps = function(state){
    return {
        notes:state.notes
    };
};

let mapDispatchToProps = function(dispatch){
    return {
        submitNewNote: function(note){
            dispatch(actions.submitNewNote(note));
        },
        editNote: function(note){
            dispatch(actions.editNote(note));
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NewNote);