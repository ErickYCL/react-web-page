"use client";

const Navbar = () => {
    return (
        <nav className="text-white bg-zinc-950 text-left p-3 border-b-2 border-gray-400 fixed top-0 left-0 w-full">
            <div className="flex justify-between items-center mt-1 mb-1">

                {/* GitHub (al inicio) */}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 duration-150">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-1.05-.01-1.91-2.78.51-3.37-1.19-3.37-1.19-.45-1.14-1.11-1.44-1.11-1.44-.91-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.02-2.69-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.61 9.61 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.54 1.37.2 2.39.1 2.64.63.7 1.02 1.6 1.02 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                </a>

                {/* Otros íconos (al final) */}
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 duration-150">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12a10 10 0 10-11 9.95V15h-2v-3h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1.2c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v6.95A10 10 0 0022 12z" />
                        </svg>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 duration-150">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1a9.1 9.1 0 01-2.88 1.1 4.52 4.52 0 00-7.69 4.13A12.81 12.81 0 011.64 2a4.52 4.52 0 001.4 6A4.4 4.4 0 01.8 7v.06a4.52 4.52 0 003.62 4.44 4.5 4.5 0 01-2 .07 4.53 4.53 0 004.22 3.14A9.05 9.05 0 010 19.5 12.7 12.7 0 007 21c8.29 0 12.81-6.87 12.81-12.81 0-.2 0-.39-.02-.59A9 9 0 0023 3z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 duration-150">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zM12 5.38A6.62 6.62 0 005.38 12 6.62 6.62 0 0012 18.62 6.62 6.62 0 0018.62 12 6.62 6.62 0 0012 5.38zm0 10.87A4.25 4.25 0 117.75 12 4.24 4.24 0 0112 16.25zm5.12-9.88a1.12 1.12 0 11-1.12 1.12 1.12 1.12 0 011.12-1.12z" />
                        </svg>
                    </a>
                </div>

            </div>
        </nav>

    );
};

export default Navbar;
