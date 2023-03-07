const TodoComputed = ({ remainingTodos, cleanCompleted }) => {
    return (
        <section className="flex justify-between py-4 px-4 bg-white rounded-b-md">
            <span className="text-gray-400">
                {remainingTodos !== 1
                    ? `${remainingTodos} tareas pendientes`
                    : `${remainingTodos} tarea pendiente`}
            </span>
            <button className="text-gray-400" onClick={cleanCompleted}>Limpiar completados</button>
        </section>
    );
};
export default TodoComputed;
