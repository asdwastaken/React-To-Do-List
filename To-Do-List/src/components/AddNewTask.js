
export default function AddNewTask({ addNewTodo, onChangeHandler, newTask }) {

    return (
        <>

            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add New Task
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={addNewTodo}>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">To do:</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" name="new-to-do" value={newTask}
                                        onChange={onChangeHandler} aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success" >Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}