import { useEffect, useState } from "react"
import { apiGet, apiDelete } from "../ütils/api"
import { ListTable } from "./ListTable";

export const ListIndex = () => {
    const [listState, setList] = useState([]);
    const [taskState, setTask] = useState([]);

    const deleteTask = async (id) => {
        await apiDelete("/api/tasks/" + id);
        setTask(taskState.filter((task) => task.id !== id));
    };

    useEffect(() => {
        apiGet("/api/lists")
            .then((data) => {
                console.log("Lists:", data); // Debug: Zkontrolujte data seznamů
                setList(data);
            })
            .catch((error) => console.error("Error fetching lists:", error));

        apiGet("/api/tasks")
            .then((data) => {
                console.log("Tasks:", data); // Debug: Zkontrolujte data úkolů
                setTask(data);
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    return (
        <>
            <nav className="priority-navigation">
                <ul className="priority-list">
                    <li className="low-priority-square"></li>
                    <li>
                        <p>Nízká priorita</p>
                    </li>
                    <li className="medium-priority-square"></li>
                    <li>
                        <p>Střední priorita</p>
                    </li>
                    <li className="high-priority-square"></li>
                    <li>
                        <p>Vysoká priorita</p>
                    </li>
                </ul>
            </nav>
            <ListTable lists={listState} tasks={taskState} deleteTask={deleteTask} />
        </>
    );
};