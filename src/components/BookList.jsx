import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <CardGroup className="container mt-4">
      {books.slice(0, 5).map((book) => (
        <Card key={book._id}>
          <Card.Img variant="top" className='btn' src={book.img} alt={book.name} />
          <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            {/* Diğer özellikleri de ekle */}
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};

export default BookList;
