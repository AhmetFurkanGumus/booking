import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <>
      <CardGroup className="container mt-4">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {books.map((book) => (
            <Col key={book._id}>
              <Card>
                <Card.Img variant="top" className='btn' src={book.img} alt={book.name} />
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.quantity}</Card.Text>
                  {/* Diğer özellikleri de ekle */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CardGroup>
      <div className="text-center mt-3">
        Toplam {books.length} kitap bulunmaktadır.
      </div>
    </>
  );
};

export default BookList;
