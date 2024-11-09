import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
      
      {/* Navbar */}
      <Navbar />


      {/* Home Screen Content */}
      <main className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold text-gray-800">
          Urban Education
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-md">
          Assimilate into city life. Helping students become sustainable commuters and find essential resources.
        </p>

        {/* Floating Begin Button */}
        <Link to="/start" className="mt-8">
          <button className="mt-8 px-8 py-4 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition transform hover:scale-105 motion-safe:animate-bounce">
            Begin
          </button>
        </Link>
      </main>
    </div>
  );
}


export default Home;
