import { useState } from "react";

const TodoCreate = ({ handleCreateTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim())
            return setTitle('');

        handleCreateTodo(title);
        setTitle('');
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 dark:bg-gray-800 transition-all duration-1000"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Crear una tarea"
                className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
                value={title}
                onChange={handleChange}
                autoFocus
            />
        </form>
    );
};
export default TodoCreate;
