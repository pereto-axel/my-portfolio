import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import reactLogo from '../assets/axel.jpg';
import { navItems } from "../constants/index.jsx";

const NavBar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        } else {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        }
    };

    return (
        <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/800">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={reactLogo} alt="React Logo" />
                        <span className="text-xl tracking-tight px-3"> PERETO Axel </span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12 mx-auto">
                        {navItems.map((item, index) => (
                            <li key={index} className="transition duration-300 hover:scale-125">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <button
                            type="button"
                            tabIndex="0"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                            <span className="sr-only">Toggle theme</span>
                        </button>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMobileDrawer} className="p-2">
                            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center text-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;