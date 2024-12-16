import React from "react";

export function TodoForm({ onSubmit }) {
    return (
        <form className="d-flex" onSubmit={onSubmit}>
            <input
                className="form-control me-2"
                placeholder="Type a new todo"
                name="task"
            />
            <button className="btn btn-primary me-2" type="submit">
                Add
            </button>
        </form>
    );
}
