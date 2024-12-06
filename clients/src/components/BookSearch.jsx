import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
const BookSearch = ({ onAddBook }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (query.length === 0) {
            setBooks([]);
            return;
        }

        const fetchBooks = async () => {
            const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
            const data = await response.json();
            setBooks(data.docs.slice(0, 10)); 
        };

        fetchBooks();
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="book-search">
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search for books" 
            />
            <div className="book-results">
                {books.length === 0 ? (
                    <div className="welcome-message">
                        <h2>Welcome to the Personal Bookshelf!</h2>
                        <p>find your favorite books.</p>
                    </div>
                ) : (
                    <div className="book-grid">
                        {books.map((book) => (
                            <BookCard
                                key={book.key} 
                                book={book} 
                                year={book.first_publish_year} 
                                edition={book.edition_count ? book.edition_count : null}
                                onAdd={onAddBook}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookSearch;
