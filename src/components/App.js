import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note"
import CreatNote from "./createNote"






function App(){
  const [notes ,setNotes] = useState([]);


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
<Note 
  notes = {notes}
/>
<Footer />
</div>
}
export default App;