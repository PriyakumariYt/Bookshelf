import React from 'react';
const BookCard = ({ book,year,edition, onAdd, onRemove,  }) => {
  return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>{year ? `First published in ${year}` : 'Publication year unknown'}</p>
            <p>{edition ? `Edition: ${edition}` : 'Edition unknown'}</p>
            {onAdd && <button onClick={() => onAdd(book)}>Add to Bookshelf</button>}
            {onRemove && <button onClick={() => onRemove(book)}>Remove</button>}
        </div>
    );
};

export default BookCard;

