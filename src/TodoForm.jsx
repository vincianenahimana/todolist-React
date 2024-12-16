import React from "react";

export function TodoForm({ onSubmit }) {
    return (
        <form className="d-flex flex-column flex-sm-row mb-4" onSubmit={onSubmit}>
            <input
                className="form-control me-2 mb-2 mb-sm-0"
                placeholder="Type a new todo"
                name="task"
            />
            <select className="form-select form-select-sm me-2 fs-6 text" name="category">
                <option value="Private">Private</option>
                <option value="Work">Work</option>
            </select>
            <button className="btn btn-primary" type="submit">
                Add
            </button>
        </form>
    );
}
