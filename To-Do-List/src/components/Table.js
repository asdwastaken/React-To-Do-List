
export default function Table({ todos, changeStatus, deleteTodo }) {

    return (
        <table className="table table-hover">
            <thead>
                <tr className="todo-table-tr">
                    <th className="task">To Do</th>
                    <th className="status">Status</th>
                    <th className="action">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(x => {
                    return (
                        <tr key={x._id} className="todo-table-tr">
                            <td className="task">{x.text}</td>
                            <td className={x.isCompleted ? "table-success" : "table-danger"}>{x.isCompleted ? "Completed" : "Not Completed"}</td>
                            <td className="action" id="action-buttons">
                                <button type="button" className="btn btn-outline-secondary" onClick={() => changeStatus(x._id)}>Change Status</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => deleteTodo(x._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )

}