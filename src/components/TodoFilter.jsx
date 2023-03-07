const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 bg-white rounded-md p-4 dark:bg-gray-800 transition-all duration-1000">
                <button
                    className={filter === 'all' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-blue-600'}
                    onClick={() => changeFilter("all")}
                >
                    Todos
                </button>
                <button
                    className={filter === 'pending' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-blue-600'}
                    onClick={() => changeFilter("pending")}
                >
                    Activos
                </button>
                <button
                    className={filter === 'completed' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-blue-600'}
                    onClick={() => changeFilter("completed")}
                >
                    Completados
                </button>
            </div>
        </section>
    );
};
export default TodoFilter;
