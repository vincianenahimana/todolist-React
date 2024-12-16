import React from 'react'

export function TodoItems({ todo, onStatusChange, onDelete }) {
    return (
        <div
            className="rounded mt-4 p-2 d-flex"
            style={{ backgroundColor: todo.done ? "#79ff4d" : "gray" }}
        >
            <div className="me-auto">{todo.content}</div>
            <div>
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
