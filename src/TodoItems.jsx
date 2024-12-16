import React from 'react'

export function TodoItems({ todo, onStatusChange, onDelete }) {
    return (
        <div
            className='rounded mt-4 p-2 d-flex justify-content-between gap-3'
            style={{ backgroundColor: todo.done ? "white" : "gray" }}
        >
            <div className="me-auto d-flex justify-content-between w-100">
                <span>{todo.content}</span>
                <span className={`border-end border-4 pe-2 ${todo.category === "Work" ? "border-warning" : "border-info"}`}>
                    {todo.category}
                </span>
            </div>
            <div className='d-flex align-items-center'>
                <i
                    className={"h5 me-2 " + (todo.done ? "bi bi-check-square" : "bi bi-square")}
                    style={{ cursor: "pointer" }}
                    onClick={onStatusChange}
                ></i>
                <i
                    className="h5 bi bi-trash3-fill"
                    style={{
                        cursor: todo.done ? "pointer" : "not-allowed",
                        color: todo.done ? "red" : "lightgray",
                    }}
                    onClick={onDelete}
                ></i>
            </div>
        </div>
    );
}

