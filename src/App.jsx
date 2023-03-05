import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="bg-[url('./src/assets/img/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Crear una tarea"
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex items-center gap-4 border-b-gray-400 border-b">
                        <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="text-gray-600 grow">
                            Curso de React en Udemy
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex items-center gap-4 border-b-gray-400 border-b">
                        <button className="flex-none inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="text-gray-600 grow">
                            Curso de React en Udemy
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between py-4 px-4">
                        <span className="text-gray-400">
                            5 tareas completadas
                        </span>
                        <button className="text-gray-400">
                            Limpiar completados
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 bg-white rounded-md p-4">
                    <button className="text-blue-600">Todos</button>
                    <button className="hover:text-blue-600">Activos</button>
                    <button className="hover:text-blue-600">Completados</button>
                </div>
            </section>
        </div>
    );
};
export default App;
