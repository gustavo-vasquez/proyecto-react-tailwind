import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import React from "react";

const TodoItem = React.forwardRef(({ todo, handleDeleteTodo, handleUpdateTodo, ...props }, ref) => {
    const { id, title, completed } = todo;

    return (
        <article ref={ref} className="flex items-center gap-4 border-b-gray-400 border-b dark:bg-gray-800" {...props}>
            <button
                className={`flex flex-none justify-center items-center h-5 w-5 rounded-full border-2 ${completed && 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}`}
                onClick={() => handleUpdateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={`grow text-gray-600 dark:text-gray-400 ${completed && 'line-through'}`}>{title}</p>
            <button className="flex-none" onClick={() => handleDeleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    )
});
export default TodoItem;
