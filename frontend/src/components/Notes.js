import { useEffect, useState } from "react"
import axios from 'axios'

function Notes() {

    const [notes, setNotes] = useState([])
    const [clickedAdd, setclickedAdd] = useState(false)

    const pullNotes = async () => {
        const response = await axios.get('/api/notes')
        console.log(response.data);
        setNotes(response.data)
    }

    const handleAddNote = () => {
        setclickedAdd(true)
    }

    const addNoteEl = <div className="border border-primary mb-3 p-2">
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="email" class="form-control" id="exampleFormControlInput1"/>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Note</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className="btn btn-info">Add Note</button>
</div>

    const noteEl = notes.map((note) => <div className="card w-50 mb-3">
    <div className="card-header">
      {note.title}
    </div>
    <div className="card-body">
      <p className="card-text">{note.content}</p>
      <div className="float-end">
        <button className="btn btn-primary mx-3">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>)

    useEffect(() => {
        pullNotes()
        console.log('Did Mount');
    }, [])

    return(
        <div className="w-100 d-flex justify-content-center flex-column align-items-center">
            <h1>Notes HomePage</h1>
            {clickedAdd && addNoteEl}
            <button onClick={handleAddNote} className="btn btn-primary mb-3">Add Note</button>
            {noteEl}
        </div>
    )
}

export default Notes