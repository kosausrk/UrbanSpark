// src/components/Navbar.js
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <> 
        <nav className="w-full bg-white bg-opacity-30 backdrop-blur-lg shadow-lg p-4 fixed top-0 flex justify-between items-center z-50">
            <div className="text-red-500 text-2xl font-semibold">
                CitySync
            </div>
            <div className="space-x-6">
                <Link to="/" className="text-gray-800 hover:text-red-500 transition duration-300">Home</Link>
                <Link to="/learn" className="text-gray-800 hover:text-red-500 transition duration-300">Learn</Link>
                <Link to="/support" className="text-gray-800 hover:text-red-500 transition duration-300">Support</Link>
                <Link to="/ai-test" className="text-gray-800 hover:text-red-500 transition duration-300">AI Test</Link>
            </div>
        </nav>
        </>
    )
}
