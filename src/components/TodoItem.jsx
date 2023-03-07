import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex items-center gap-4 border-b-gray-400 border-b">
            <button
                className={`flex flex-none justify-center items-center h-5 w-5 rounded-full border-2 ${completed && 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}`}
                onClick={() => handleUpdateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={`grow text-gray-600 ${completed && 'line-through'}`}>{title}</p>
            <button className="flex-none" onClick={() => handleDeleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
export default TodoItem;
