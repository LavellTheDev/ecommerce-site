import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id:1, name: 'Shoes', description: 'Running shoes', price: '$150' },
    { id:2, name: 'Macbook', description: 'Apple Macbook', price:'$2000', image:"https:/pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=300;maxWidth=450" }
];

const Products = () => {
  return(
    <main>
      <Grid container justify = "center" spacing = {4}>
          {products.map((product) => (
              <Grid item key ={product.id} xs ={12} sm={6} md={4} lg ={3}>
                  <Product product={product} />
              </Grid>
          ))};
      </Grid>
    </main>
  );
}

export default Products;
