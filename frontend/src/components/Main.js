
import { useEffect, useState } from "react"
import axios from 'axios'
import AddNote from "./AddNote"
import Notes from "./Notes"

function Main() {

    const [notes, setNotes] = useState([])
    const [clickedAdd, setclickedAdd] = useState(false)
    useEffect(() => {
        pullNotes()
    }, [])

    const pullNotes = async () => {
        const response = await axios.get('/api/notes')
        setNotes(response.data)
    }

    const handleAddNote = () => {
        setclickedAdd(true)
    }

    const onNotesUpdate = () => {
        pullNotes()
    }

    const noteEl = notes.map((note) => <Notes data={note} onNotesUpdate={onNotesUpdate}/>)

   
    return(
        <div className="w-100 d-flex justify-content-center flex-column align-items-center">
            <h1>Notes HomePage</h1>
            {clickedAdd && <AddNote onNotesUpdate={onNotesUpdate} closeAddFrom={setclickedAdd}/>}
            <button onClick={handleAddNote} className="btn btn-primary mb-3">Add Note</button>
            {noteEl}
        </div>
    )
}

export default Main

