import React from "react";

export function TodoFooter({ undoneCount, onDeleteAllDone, hasDoneTasks }) {
    return (
        <>
            <button
                className="btn btn-danger mt-2"
                onClick={onDeleteAllDone}
                disabled={!hasDoneTasks}
            >
                Delete All Done
            </button>
            <div className="mt-4 text-white fst-italic">
                {undoneCount} {undoneCount === 1 ? "todo" : "todos"} left
            </div>
        </>
    );
}
