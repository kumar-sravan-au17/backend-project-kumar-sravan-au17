function addNote() {
    return(
        <div className="border border-primary mb-3 p-2">
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
    )
}

export default addNote