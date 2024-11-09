// src/components/StartPage.js
import React from 'react';
import { Navbar } from '../components/navbar';
import UserForm from '../components/UserForm';

function StartPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <main className="flex flex-col items-center mt-10"> {/* Reduced top margin */}
        <UserForm />
      </main>
    </div>
  );
}

export default StartPage;
