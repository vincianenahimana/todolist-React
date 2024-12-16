import React, { useEffect, useState } from "react";
import './TodoList.css';
import { TodoHeader } from './TodoHeader';
import { TodoForm } from './TodoForm';
import { TodoItems } from './TodoItems';
import { TodoFooter } from './TodoFooter';

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
                <TodoHeader />

                <TodoForm onSubmit={handleSubmit} />

                {todos.map((todo, index) => (
                    <TodoItems
                        key={index}
                        todo={todo}
                        onStatusChange={() => changeTaskStatus(index)}
                        onDelete={() => todo.done && deleteTask(index)}
                    />
                ))}

                <TodoFooter
                    undoneCount={undoneTodos}
                    hasDoneTasks={doneTasks}
                    onDeleteAllDone={deleteAllTaskDone}
                />
            </div>
        </div>
    );
}
