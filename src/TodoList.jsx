import React, { useEffect, useState } from "react";
import './TodoList.css';

export default function TodoList() {
    function getLocalStoredTodos() {
        let data = localStorage.getItem("todos");
        let json = JSON.parse(data);
        return json ? json : [];
    }

    const [todos, setTodos] = useState(getLocalStoredTodos());
    const undoneTodos = todos.filter(todo => !todo.done).length;
    const doneTasks = todos.some(todo => todo.done);


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleSubmit(event) {
        event.preventDefault();

        let task = event.target.task.value;

        if (!task) {
            alert('Enter a new task');
            return;
        }

        setTodos([...todos, { content: task, done: false }]);

        event.target.reset();
    }

    function changeTaskStatus(index) {
        let newToDos = [...todos];
        newToDos[index].done = !newToDos[index].done;
        setTodos(newToDos);
    }

    function deleteTask(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    function deleteAllTaskDone() {
        const incompleteTasks = todos.filter(todo => !todo.done); 
        setTodos(incompleteTasks);
        localStorage.setItem("todos", JSON.stringify(incompleteTasks));
    }
    return (
        <div className="container my-5">
            <div className="todolist mx-auto rounded border p-4">
                <h2 className="text-white text-center mb-5">My TodoList</h2>

                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="Type a new todo" name="task" />
                    <button className="btn btn-primary me-2" type="submit">Add</button>
                    
                </form>

                {todos.map((todo, index) => {
                    return (
                        <div key={index} className="rounded mt-4 p-2 d-flex"
                            style={{ backgroundColor: todo.done ? "#79ff4d" : "gray" }}>
                            <div className="me-auto">{todo.content}</div>
                            <div>
                                <i
                                    className={"h5 me-2 " + (todo.done ? "bi bi-check-square" : "bi bi-square")}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => changeTaskStatus(index)}
                                ></i>
                                <i
                                    className="h5 bi bi-trash3-fill"
                                    style={{
                                        cursor: todo.done ? "pointer" : "not-allowed",
                                        color: todo.done ? "red" : "lightgray",
                                    }}
                                    onClick={() => todo.done && deleteTask(index)}
                                ></i>
                            </div>
                        </div>
                    );
                })}
                <button className="btn btn-danger mt-2" 
                        onClick={()=>deleteAllTaskDone()}
                        disabled={!doneTasks}>
                        Delete All
                </button>
                <div className="mt-4 text-white fst-italic">
    {undoneTodos} {undoneTodos === 1 ? "todo" : "todos"} left
</div>
            </div>
            
        </div>
    );
}
