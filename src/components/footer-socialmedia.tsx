"use client";

const Footer = () => {
    return (
        <footer className="mt-8 text-gray-900 text-center p-4 border-t border-gray-500">
            <h2 className="text-lg font-bold">Contacto</h2>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 duration-150">
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
        </footer>
    );
};

export default Footer;
