// src/components/BookDetail.js
import React, { useEffect, useState } from 'react';
import { fetchBookById } from '../api/api.js';

const BookDetail = ({ id }) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
      } catch (err) {
        setError('Livro não encontrado');
      }
    };

    loadBook();
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>Autor: {book.author}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
