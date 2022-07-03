import { Box, Typography, Card, Button, CardContent, CardActions, Grid, Container, CardMedia } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function ProductInfo({selectedProduct, addToCart}) {
  return(
    <>
    <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          Product Info
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <Card sx={{p: 2}}>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            {selectedProduct.item}
        </Typography>
        <CardMedia 
          sx={{pt: '56%'}}
          image={selectedProduct.image}/>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
          ${selectedProduct.price}
        </Typography>
        <Typography component='p' variant='p' sx={{p: 2}}>
          {selectedProduct.description}
        </Typography>
        <Button
          type="submit"
          variant="contained"
          onClick={addToCart}
          sx={{m: 3}}
        >Add to Cart</Button>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained"
            size='small'
            sx={{p: 0.88}}
            >
            Keep Browsing
          </Button>
          </Link>
        </Card>
      </Container>
    </>
  )
}

export default ProductInfo