import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const dummyTodos = [
    {
        id: 1,
        title: "Terminar curso de React en Udemy",
        completed: true,
    },
    { id: 2, title: "Ir al gimnasio", completed: false },
    { id: 3, title: "Comer hamburguesa", completed: false },
    { id: 4, title: "Dormir la siesta", completed: false },
    { id: 5, title: "Ver el partido de River", completed: false },
];

const initialTodos = JSON.parse(localStorage.getItem('todos')) || dummyTodos;

const reorderItems = (list, startIndex, endIndex) => { 
    const reordenedList = [...list];
    const [extractedItem] = reordenedList.splice(startIndex, 1);

    reordenedList.splice(endIndex, 0, extractedItem);
    return reordenedList;
}; // se crea afuera para que no se vuelva a crear la función en cada renderizado (se pueden sacar también las demás funciones de App.jsx

const App = () => {
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleCreateTodo = (title) => {
        let newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id) => {
        let filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    const handleUpdateTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedTodos);
    };

    const remainingTodos = todos.filter((todo) => !todo.completed).length;

    const cleanCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "pending":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => {
        setFilter(filter); // podría haber pasado directamente 'setFilter' como prop en <TodoFilter/>
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;

        if(!destination) return;

        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return; // se fija si el índice es el mismo en el MISMO contenedor (en el caso que lo mueva a otro <Droppable/> con el mismo índice)
        
        setTodos((prevTodos) =>
            reorderItems(
                prevTodos,
                source.index,
                destination.index
            )
        );
    };

    return (
        <div className="bg-mobile-light dark:bg-mobile-dark bg-contain bg-no-repeat bg-gray-200 min-h-screen dark:bg-gray-900 transition-all duration-1000 md:bg-desktop-light md:dark:bg-desktop-dark">
            <Header />

            <main className="container mx-auto mt-8 px-4 max-w-xl">
                <TodoCreate handleCreateTodo={handleCreateTodo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterTodos()}
                        handleDeleteTodo={handleDeleteTodo}
                        handleUpdateTodo={handleUpdateTodo}
                    />
                </DragDropContext>

                <TodoComputed
                    remainingTodos={remainingTodos}
                    cleanCompleted={cleanCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Arrastrar y soltar para reordenar la lista
            </footer>
        </div>
    );
};
export default App;
