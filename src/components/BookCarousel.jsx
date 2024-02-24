import React from 'react';
import { Carousel } from 'react-bootstrap';

const BookCarousel = ({ books }) => {
  return (
    <Carousel>
      {books.map((book) => (
        <Carousel.Item key={book._id}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400" // Kitap resmini ekleyin veya başka bir yol kullanın
            alt={book.name}
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>{book.name}</h3>
            <p>{book.price}</p>
            {/* Diğer özellikleri de ekle */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BookCarousel;
