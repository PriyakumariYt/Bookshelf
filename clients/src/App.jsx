import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/BookMark';
import './App.css';

function App() {
    const [bookshelf, setBookshelf] = useState(() => {
        return JSON.parse(localStorage.getItem('bookshelf')) || [];
    });

    const addBookToShelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Book Search</Link>
                    <Link to="/bookshelf">My Bookshelf</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<BookSearch onAddBook={addBookToShelf} />} />
                    <Route path="/bookshelf" element={<Bookshelf />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
