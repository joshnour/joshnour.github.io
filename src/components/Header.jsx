import { useEffect, useState } from 'react';

function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm">
            <div className="max-w-full mx-auto w-full px-6 py-4 flex justify-center items-center gap-6">
                <nav className="space-x-4 text-sm text-indigo-600 dark:text-indigo-300 flex items-center">
                    <a href="#home" className="hover:text-black dark:hover:text-white">About</a>
                    <a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a>
                    <a href="#skills" className="hover:text-black dark:hover:text-white">Skills</a>
                    <a href="#courses" className="hover:text-black dark:hover:text-white">Courses</a>
                    <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
                </nav>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={() => setIsDark(!isDark)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-indigo-600"></div>
                    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {isDark ? 'Dark' : 'Light'}
                    </span>
                </label>
            </div>
        </header>
    );
}

export default Header;
