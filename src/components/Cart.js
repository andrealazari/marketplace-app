import { Box, Typography, CardMedia, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Link} from 'react-router-dom'

function Cart({cart, buyProducts, deleteFromCart}) {
  const price = cart.reduce((total, product) => total + Number(product.price), 0)

  const productList = cart.map((product, index) => 
    <Card key={index} sx={{m: 1}}>
      <Box display='flex'> 
        <CardMedia 
          sx={{pt: '10%'}}
          image={product.image}/>
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
      <CardContent>
      <Typography component='h2' variant='h5'>
          {product.item}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component='h2' variant='h5'>
          ${product.price}
          
        </Typography>
      </CardContent>
    </Box>  
  </Card>
)

  return(
    <>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          My Cart
        </Typography>
      </Container>
      <Container maxWidth='md'>
        <Grid container gap={5}>
          <Grid item md={8} sm={12} xs={12}>
              {productList}
          </Grid>
          <Card sx={{m: 1, p: 2}}>
            <Grid item>
              <Typography component='h2' variant='h5' sx={{m: 2}}>
                Total

              </Typography>
              <Typography component='h2' variant='h5' sx={{m: 2}}>
                ${price}
              </Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained"
                  size='small'
                  sx={{m: 2}}
                  >
                  Keep Shopping
                </Button>
              </Link>
              <br/>
              <Button 
                variant="contained"
                size='small'
                onClick={buyProducts}
                sx={{m: 2}}
                >
                Buy
              </Button>
            </Grid>
          </Card>
        </Grid>
      </Container>

     
    </>
  )
}

export default Cart