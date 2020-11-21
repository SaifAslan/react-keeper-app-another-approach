import React from "react";
import Notes from "../notes";

class Note extends React.Component{
    render(){
        return(
            Notes.map(note=>{
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