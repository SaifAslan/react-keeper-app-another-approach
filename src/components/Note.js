import React from "react";


class Note extends React.Component{
    constructor(props){
        super(props);
        this.NotesWriten = this.NotesWriten.bind(this);
        this.DeleteBtn = this.DeleteBtn.bind(this);
    }

    NotesWriten(){
return this.props.notes
    }
    DeleteBtn(){
            this.props.onDelete(this.props.id)
    }
    render(){
        return(
            <div className="note">
             <h1>{this.props.title}</h1>
             <p>{this.props.content}</p>
             <button onClick={this.DeleteBtn}>delete</button>
             </div>

        );
    }
}

export default Note; 