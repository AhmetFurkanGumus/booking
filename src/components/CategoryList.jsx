// src/components/CategoryList.jsx

import React from 'react';
import { Grid, Card, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item key={category._id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            <img src={category.img} alt={category.title} style={{ width: '100%', height: 'auto' }} />
            <CardContent>
              <Typography variant="h6">{category.title}</Typography>
              <Typography variant="body2">{category.categoryID}</Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/kitaplar/${category.categoryID}`}
            >
              Detaylar
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;
