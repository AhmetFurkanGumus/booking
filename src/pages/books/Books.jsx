import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooksByCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/${categoryId}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooksByCategory();
  }, [categoryId]);

  return (
    <div>
      <h2>Kitap Listesi</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.name}</strong> - {book.price} TL
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
