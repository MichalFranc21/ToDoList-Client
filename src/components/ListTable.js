

export const ListTable = ({ lists, tasks, deleteTask }) => {

    return <div className="list-table">
        {lists.map((list) => (
            <table key={list.id}>
                <thead className="table-head">
                    <tr>
                        <td><p className="head-name">{list.name}</p></td>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {tasks
                        .filter((task) => ((task.listIDs.includes(list.id))))
                        .map((task) => (
                            <tr key={task.id}>
                                <td>
                                    {task.priority === "LOW" ? (
                                        <p className="low-priority">
                                            <div className="task-name">{task.name}</div> {task.description}
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="delete-button"
                                            >×</button>
                                        </p>
                                    ) : task.priority === "MEDIUM" ? (
                                        <p className="medium-priority">
                                            <div className="task-name">{task.name}</div> {task.description}
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="delete-button"
                                            >×</button>
                                        </p>
                                    ) : task.priority === "HIGH" ? (
                                        <p className="high-priority">
                                            <div className="task-name">{task.name}</div> {task.description}
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="delete-button"
                                            >×</button>
                                        </p>
                                    ) : (
                                        <p>{task.name} {task.description}</p>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        ))}
    </div>

}