import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDeleteTodo, handleUpdateTodo }) => {
    return (
        <div className="rounded-t-md overflow-hidden bg-white [&>article]:p-4 mt-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleUpdateTodo={handleUpdateTodo}
                />
            ))}
        </div>
    );
};
export default TodoList;
