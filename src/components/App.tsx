import React from 'react';

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4 rounded">
                <h1 className="text-2xl">Welcome to My React App</h1>
            </header>
            <main className="mt-4">
                <img src="/react.svg" alt="React Logo" className="h-20" />
                <p className="mt-2 text-lg">This is a simple application using Vite and Tailwind CSS.</p>
            </main>
        </div>
    );
};

export default App;
