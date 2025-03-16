import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <header className="bg-white shadow-md p-4 sticky top-0 z-50">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link to={'/'}>
                        <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
                    </Link>
                    <ul className="flex space-x-4">
                        <li><a href="#cards" className="hover:text-blue-600">Features</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                        <li><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <header className="bg-white shadow">
                <div className="container mx-auto text-center py-8 px-4">
                    <h2 className="text-3xl font-semibold text-purple-500">Explore Essential React Hooks</h2>
                    <p className="mt-2 text-gray-600">
                        Dive deep into React hooks and discover how they simplify state management, side effects, and performance optimizations.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-6">
                <section id="cards" className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* useState Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useState, useEffect</h2>
                                <p className="text-gray-700">
                                    Easily add state to your functional components. useState returns a stateful value along with a function to update it.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* createContext Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">createContext, useContext</h2>
                                <p className="text-gray-700">
                                    Share data across your component tree without prop drilling by creating a context object.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* useReducer Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useReducer</h2>
                                <p className="text-gray-700">
                                    Manage complex state logic with a reducer function, offering a more predictable state transition.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                <section id="cards" className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                        {/* useSelector Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useSelector, useDispatch, useStore</h2>
                                <p className="text-gray-700">useSelector : Extract data from your Redux store's state using a selector function with useSelector.</p>
                                <p>useDispatch : Dispatch actions to your Redux store to update state efficiently using the useDispatch hook.</p>
                                <p>useStore : Access the Redux store instance directly for advanced scenarios using the useStore hook.</p>
                                <div className="mt-6">
                                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                <section id="cards" className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* useRef Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useRef</h2>
                                <p className="text-gray-700">
                                    Persist mutable values across renders without triggering re-renders using the useRef hook.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* useMemo Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useMemo</h2>
                                <p className="text-gray-700">
                                    Optimize performance by memoizing expensive calculations, recomputing only when dependencies change.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* useCallback Card */}
                        <Link to="/">
                            <div className="bg-white rounded-xl shadow-2xl p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <h2 className="text-xl font-semibold mb-3">useCallback</h2>
                                <p className="text-gray-700">
                                    Memoize callback functions to prevent unnecessary re-renders of child components with useCallback.
                                </p>
                                <div className="mt-6">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="bg-gray-100 py-6">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} SkillUp Academy. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
