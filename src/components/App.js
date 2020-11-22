import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note"
import CreatNote from "./createNote"






function App(){
  const [notes ,setNotes] = useState([]);

  function onDelete(id){
    return setNotes(prevNotes =>
      prevNotes.filter((note,index)=>{
      return id !== index
    }))
  }

  function AddNote(notes){
    setNotes(prevNotes=>{
      return [...prevNotes, notes]
    })
    }

  return <div>
<Header />
<CreatNote 
  onAdd = {AddNote}
/>
{notes.map((note,index)=>{
                return(
                  <Note 
                  key={index}
                  id={index}
title={note.title}
content ={note.content}
onDelete={onDelete}
                  />
                  )
                  })
                }
<Footer />
</div>
}
export default App;