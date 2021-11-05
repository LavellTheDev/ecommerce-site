import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import{ AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  console.log(product);


  return (
    <Card className= {classes.root}>
      <CardMedia className={classes.media} image ={product.image.url} title={product.name}></CardMedia>
      <CardContent>
        <div className = {classes.cardContent}>
          <Typography variant="h5" gutterBottom>
              {product.name}
          </Typography>
          <Typography variant="h5">
              {product.price.formatted_with_symbol}
          </Typography>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

  )
}

export default Product
