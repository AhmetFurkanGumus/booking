import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../../components/CategoryList';

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
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching caategories:', error);
      }
    };
  

  return (
    <>
    <CategoryList categories={categories} />
    </>
  );
};

export default Categories;
