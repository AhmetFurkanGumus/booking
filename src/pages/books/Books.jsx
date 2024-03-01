// Books.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card,CardGroup } from 'react-bootstrap';

const Books = () => {
  const { categoryID } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksByCategory();
  }, [categoryID]);

  const getBooksByCategory = async () => {
    try {
      console.log('categoryID:', categoryID);

      if (categoryID) {
        const response = await axios.get(`http://localhost:5555/books/getBooksByCategory/${categoryID}`);
        console.log('API Response:', response.data); 
        setBooks(response.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

 
  useEffect(() => {
    console.log('Current state:', books);
  }, [books]);

  return (
   <>
    <CardGroup className="container mt-4">
    {books.slice(0, 5).map((book) => (
      <Card key={book._id}>
        <Card.Img variant="top" className='btn' src={book.img} alt={book.name} />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.price}</Card.Text>
          <Card.Text>{book.quantity}</Card.Text>
          
        </Card.Body>
      </Card>
    ))}
  </CardGroup>
  <div className="text-center mt-3">
        Toplam {books.length} kitap bulunmaktadır.
      </div>
    </>
  );
};

export default Books;
