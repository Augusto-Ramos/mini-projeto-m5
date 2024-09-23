// src/App.js
import React from 'react';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

const App = () => {
  return (
    <div>
      <h1>Minha Biblioteca Antirracista</h1>
      <BookSearch />
      <BookList />
    </div>
  );
};

export default App;
