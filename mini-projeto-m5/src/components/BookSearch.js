// src/components/BookSearch.js
import React, { useState } from 'react';
// BookSearch.js
import { fetchBooksByAuthor, fetchBooksByTitle } from '../api/api.js'; // ajuste o caminho conforme necessário

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearchByAuthor = async () => {
    try {
      const data = await fetchBooksByAuthor(query);
      setResults(data);
      setError('');
    } catch (err) {
      setError('Nenhum livro encontrado para este autor');
    }
  };

  const handleSearchByTitle = async () => {
    try {
      const data = await fetchBooksByTitle(query);
      setResults(data);
      setError('');
    } catch (err) {
      setError('Nenhum livro encontrado com esse título');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Buscar por autor ou título'
      />
      <button onClick={handleSearchByAuthor}>Buscar por Autor</button>
      <button onClick={handleSearchByTitle}>Buscar por Título</button>
      {error && <p>{error}</p>}
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
