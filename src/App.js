import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
        
        {/* Navbar */}
        <nav className="w-full bg-white shadow-md p-4 fixed top-0 flex justify-between items-center">
          <div className="text-red-500 text-2xl font-semibold">
            Urban Education
          </div>
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-500 transition duration-300">Home</Link>
            <Link to="/learn" className="text-gray-700 hover:text-red-500 transition duration-300">Learn</Link>
            <Link to="/support" className="text-gray-700 hover:text-red-500 transition duration-300">Support</Link>
            <Link to="/ai-test" className="text-gray-700 hover:text-red-500 transition duration-300">AI Test</Link>
          </div>
        </nav>

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

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/support" element={<Support />} />
        <Route path="/ai-test" element={<AiTest />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div className="pt-32">
    <h2 className="text-2xl font-semibold">Welcome to Urban Education</h2>
    <p className="text-gray-600 mt-2">Navigate the city, learn valuable skills, and connect with your community.</p>
  </div>
);

const Learn = () => <div className="pt-32"><h2>Learn Page</h2></div>;
const Support = () => <div className="pt-32"><h2>Support Page</h2></div>;
const AiTest = () => <div className="pt-32"><h2>AI Test Page</h2></div>;
const Start = () => <div className="pt-32"><h2>Getting Started...</h2></div>;

export default App;
