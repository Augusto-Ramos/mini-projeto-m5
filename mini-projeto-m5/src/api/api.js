const BASE_URL = 'http://localhost:3333/api';

export const fetchAllBooks = async () => {
  const response = await fetch(`${BASE_URL}/api/livros`);
  if (!response.ok) {
    throw new Error('Erro ao buscar todos os livros');
  }
  return await response.json();
};

export const fetchBookById = async (id) => {
  const response = await fetch(`${BASE_URL}/api/livros/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar livro por ID');
  }
  return await response.json();
};

export const fetchBooksByAuthor = async (author) => {
  const response = await fetch(`${BASE_URL}/api/livros/autor/${author}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar livros pelo autor');
  }
  return await response.json();
};

export const fetchBooksByTitle = async (title) => {
  const response = await fetch(`${BASE_URL}/api/livros/titulo/${title}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar livros pelo título');
  }
  return await response.json();
};
