import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
const Bookshelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const removeBookFromShelf = (bookToRemove) => {
        const newBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <div className="bookshelf">
            <h2>My Bookshelf</h2>
            {bookshelf.length === 0 ? (
                <p>No books in the bookshelf.</p>
            ) : (
                <div className="book-grid">
                    {bookshelf.map((book, index) => (
                        <BookCard key={index} book={book} 
                           year={book.first_publish_year} 
                           edition={book.edition_count ? book.edition_count : null}
                        onRemove={removeBookFromShelf} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookshelf;
