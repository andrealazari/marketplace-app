import { Box, Typography, Card, Button, CardContent, CardActions, Grid, Container, CardMedia, Avatar } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'

function ProductInfo({selectedProduct, addToCart, cart, setCart, products, setProducts}) {

  const navigate = useNavigate()
  
  function addToCart(event) {
    event.preventDefault();
    fetch('/api/cart', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(selectedProduct)
    })
      .then(res => res.json())
      .then(product => {
        setCart([...cart, product])
        navigate('/cart')
      })
        // console.log(selectedProduct)
        
   
  }

  return(
    <>
    <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          Product Information
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <Card sx={{p: 2}}>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            Seller Info
        </Typography>
        <Avatar alt="Remy Sharp" src={selectedProduct.avatar} sx={{mx: 'auto'}}/>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            {selectedProduct.userName}
        </Typography>
        </Card>
        <Card sx={{p: 2, mt: 5}}>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            Product Info
        </Typography>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            {selectedProduct.item}
        </Typography>
        <CardMedia
          sx={{pt: '56%', height: 0}}
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