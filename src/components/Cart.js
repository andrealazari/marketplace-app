import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Cart({cart, buyProducts, deleteFromCart}) {
  const productList = cart.map((product, index) => 
  <Card key={index}>
    <CardContent>
     <Typography component='h2' variant='h5'>
        {product.item}
      </Typography>
      <Typography component='h2' variant='h5'>
        {product.price}
      </Typography>
    </CardContent>
    <CardActions>
        <Button 
          variant="contained"
          size='small'
          onClick={deleteFromCart}
          id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
          >
          Delete From Cart
        </Button>
    </CardActions>
  </Card>
)

  return(
    <>
      <Container>
      <Typography component='h2' variant='h5'>
        {productList}
        </Typography>
     </Container>
     <Link to="/">
      <Button 
        variant="contained"
        size='small'
        >
        Keep Browsing
      </Button>
     </Link>
     
    <Button 
      variant="contained"
      size='small'
      onClick={buyProducts}
      >
      Buy
    </Button>
    </>
  )
}

export default Cart