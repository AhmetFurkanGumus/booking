import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCarousel from '../components/BookCarousel';
import BookList from '../components/BookList';

const Home = () => {
  const url = 'http://localhost:5555/';
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(`${url}books`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <>
      <BookCarousel books={books} />
      <div style={{ margin: '20px' }}></div> {/* Carousel ve Listeleme arasına boşluk ekleyin */}
      <BookList books={books} />
    </>
    // <div>
    //   {
    //     books.map((book) => (
    //       <div key={book._id}>
    //         <h1>{book.name}</h1>
    //         <p>{book.price}</p>
    //         {/* Diğer özellikleri de ekle */}
    //       </div>
    //     ))
    //   }
    // </div>
  );
}

export default Home;
