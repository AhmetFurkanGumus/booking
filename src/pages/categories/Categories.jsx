import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../../components/CategoryList';
import { Link } from 'react-router-dom';

const Categories = () => {
    const url = 'http://localhost:5555/category';
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories();
    }, []);
  
    const getCategories = async () => {
      try {
        const response = await axios.get(`${url}/getAllCategory`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    return (
      <>
        <CategoryList categories={categories} />
      </>
    );
};

export default Categories;
