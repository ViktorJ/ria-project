"use strict";

let React = require("react");

const newNote = React.createClass({
    render: function(){
        return (
            <form>
                <div className="form-group">
                    <label>Note title</label>
                    <input type="text" className="form-control" id="noteTitle"/>
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <textarea className="form-control" rows="4" id="note"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

module.exports = newNote;