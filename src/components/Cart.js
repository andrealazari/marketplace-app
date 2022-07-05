import { Box, Typography, CardMedia, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'

function Cart({cart, buyProducts, deleteFromCart, setCart, purchases, setPurchases, products, setProducts}) {

  const navigate = useNavigate()

  function buyProducts(event) {
    event.preventDefault();
    const productArray = event.target.id.split('|')
    const productObj = {
      item_id: productArray[3],
    }
    fetch('/api/purchases', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cart)
    })
      .then(res => res.json())
      .then(product => {
        
        setPurchases([...purchases, ...product])
        product.forEach(p => {
          fetch(`/api/sales/${p.item_id}`, {
            method: 'DELETE'
          }).then(() => {
            const newList = products.filter(pr => pr.id != p.item_id)
            setProducts([...newList])
          })
          fetch(`/api/cart/${p.item_id}`, {
            method: 'DELETE'
          }).then(() => {
            const newCarts = cart.filter(pr => pr.id != p.item_id)
            setCart([])
          navigate('/purchases')
        })
        
      })
  })
}

  function deleteFromCart(event) {
    event.preventDefault();
    const productArray = event.target.id.split('|')
    const productObj = {
      item_id: productArray[3],
    }
    console.log(productArray)
    console.log(products)
    fetch(`/api/cart/${productObj.item_id}`, {
      method: 'DELETE'
    })
      .then(() => {
      const newCart = cart.filter((product) => product.id != productObj.item_id)
      setCart(newCart)
    });
  }
  
  let price
  let productList
  if(cart !== '') {
    price = cart.reduce((total, product) => total + Number(product.price), 0)

    productList = cart.map((product, index) => 
    <Card key={index} sx={{m: 1}}>
      <Box display='flex'> 
        {/* <CardMedia 
          sx={{pt: '56%', height: 0}}
          image={product.image}/> */}
        <CardActions>
        <Button 
          variant="contained"
          size='small'
          onClick={deleteFromCart}
          id={product.item + '|' + product.price + '|' + product.description + '|' + product.id + '|' + product.image}
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
  }else {
    price = 0
    productList = ''
  }
  

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
                // id={product.item + '|' + product.price + '|' + product.description + '|' + product.id + '|' + product.image}
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