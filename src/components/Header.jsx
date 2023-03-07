import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialThemeMode = document.documentElement.classList.contains("dark");

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialThemeMode);

    const handleToggleTheme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={handleToggleTheme}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};
export default Header;
