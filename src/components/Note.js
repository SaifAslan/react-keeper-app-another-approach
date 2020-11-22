import React from "react";
import Notes from "../notes";

class Note extends React.Component{
    constructor(props){
        super(props);
        this.NotesWriten = this.NotesWriten.bind(this);
    }

    NotesWriten(){
return this.props.notes
    }
    render(){
        return(
            this.NotesWriten().map(note=>{
                return(
            <div key={note.key} className="note">
             <h1>{note.title}</h1>
             <p>{note.content}</p>
             </div>
                )
            })

        );
    }
}

export default Note; 