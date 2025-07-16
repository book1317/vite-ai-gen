import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-web-green-50 via-neutral-50 to-web-green-100">
      <header className="bg-web-green-600 text-white p-8 rounded-lg shadow-lg border border-web-green-700">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </header>
      <main className="mt-10 text-center bg-white p-8 rounded-lg shadow border border-neutral-200">
        <img src="/react.svg" alt="React Logo" className="h-24 mx-auto mb-6" />
        <p className="text-xl text-neutral-700 font-medium">
          This is a simple application using Vite and Tailwind CSS.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-web-green-500 hover:bg-web-green-600 text-white px-6 py-3 rounded-md shadow transition-colors duration-200 font-medium">
            Get Started
          </button>
          <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-6 py-3 rounded-md shadow transition-colors duration-200 font-medium border border-neutral-200">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
