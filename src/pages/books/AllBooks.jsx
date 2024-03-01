import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../../components/BookList';


const AllBooks = () => {
    const url = 'http://localhost:5555/books';
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get(`${url}/getAllbooks`);
            setBooks(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    return (
        <div>
            <BookList books={books} />
        </div>
    )
}

export default AllBooks