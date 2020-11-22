import React from "react";
import Note from "./Note";
class CreatNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "", content:""}
        this.handleChange = this.handleChange.bind(this);
        this.sendToNote = this.sendToNote.bind(this);
    }
   

    handleChange(event){
        const {name, value}= event.target;
        this.setState(prevNote => {
            return{...prevNote,[name]: value}
        });
    
    }

    sendToNote(event){
        event.preventDefault();
    this.props.onAdd(this.state);
    this.setState ({title: "", content:""});
}

    render(){
    
        return(
            <div>
                <form>
                    <input name="title" onChange={this.handleChange} value={this.state.title} placeholder="Title" />
                    <textarea name="content" onChange={this.handleChange} value={this.state.content} placeholder="Take a note..." rows="3"/>
                    <button onClick={this.sendToNote}>Add</button>
                </form>
            </div>
        )
    }
}
export default CreatNote;