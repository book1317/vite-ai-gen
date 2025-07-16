import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-web-green-50 via-neutral-50 to-web-green-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <header className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-web-green-500 rounded-full mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-web-green-700 mb-4 tracking-tight">
            Hello World
          </h1>
          <p className="text-xl text-neutral-600 max-w-lg mx-auto leading-relaxed">
            Welcome to a modern React application built with Vite and styled
            with our design system
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 backdrop-blur-sm bg-opacity-90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  Modern Design System
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  Responsive Layout
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  Tailwind CSS Integration
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  TypeScript Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  Fast Development
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-web-green-500 rounded-full"></div>
                <span className="text-neutral-700 font-medium">
                  Production Ready
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Link to="/login">
              <Button className="bg-web-green-500 hover:bg-web-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                Go to Login
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-web-green-500 text-web-green-700 hover:bg-web-green-50 px-6 py-2 rounded-lg transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>

        <footer className="text-center">
          <p className="text-neutral-500 text-sm">
            Built with ❤️ using React, Vite, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
