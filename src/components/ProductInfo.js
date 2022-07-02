import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function ProductInfo({selectedProduct, addToCart}) {
  return(
    <>
      <Container>
      <Typography component='h2' variant='h5'>
          {selectedProduct.item}
        </Typography>
        <Typography component='h2' variant='h5'>
          {selectedProduct.price}
        </Typography>
        <Typography component='h2' variant='h5'>
          {selectedProduct.description}
        </Typography>
      </Container>
      <Container>
        <Button
          type="submit"
          variant="contained"
          onClick={addToCart}
        >Add to Cart</Button>
        <Link to="/">
          <Button 
            variant="contained"
            size='small'
            >
            Keep Browsing
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default ProductInfo