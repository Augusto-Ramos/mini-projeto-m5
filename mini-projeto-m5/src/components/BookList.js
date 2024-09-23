// src/App.js
import React, { useEffect, useState } from 'react';
// BookList.js
import { fetchAllBooks } from '../api/api'; // ajuste o caminho conforme necessário

const App = () => {
  const [livros, setLivros] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const obterLivros = async () => {
      try {
        const resposta = await fetchAllBooks();
        setLivros(resposta);
      } catch (err) {
        setErro('Erro ao buscar os livros');
        console.error(err);
      }
    };

    obterLivros();
  }, []);

  return (
    <div>
      <h1>Lista de Livros</h1>
      {erro && <p>{erro}</p>}
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            {livro.title} - {livro.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
