import {Typography, Button, CardActions, Card, Grid, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Home({ products, selectedProductChange, setSelectedProduct, loggedIn}) {
  const navigate = useNavigate()
  
  function selectedProductChange(event) {
    event.preventDefault();
    const productArray = event.target.id.split('|')
   
    const productObj = {
      item: productArray[0],
      price: productArray[1],
      description: productArray[2],
      item_id: productArray[3],
      image: productArray[4] ,
      avatar: productArray[5],
      userName: productArray[6],
      userid: productArray[7] 
    }
    setSelectedProduct(productObj)
    navigate('/product-info')
  }

  let productListIn =  products.filter(p => p.userid != loggedIn.userId).map((product, index) => 
    <>
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{p: 2}}>
          <Typography component='h2' variant='h5' sx={{p: 2}}>
              {product.item}
          </Typography>
          <CardMedia 
            sx={{pt: '56%'}}
            image={product.image}/>
          <Typography component='h2' variant='h5' sx={{p: 1}}>
              ${product.price}
          </Typography>
          <CardActions sx={{p: 2}} >
            <Link to='/product-info' style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  p: 1
                }}
                variant="contained"
                size='small'
                onClick={selectedProductChange}
                id={product.item + '|' + product.price + '|' + product.description + '|' + product.id + '|' + product.image + '|' + product.avatar  + '|' + product.username  + '|' + product.userid}
                >
                More Info
              </Button>
            </Link>
          </CardActions>
        </Card>    
      </Grid>
    </>
  )

  let productListOut =  products.filter(p => p.userid != loggedIn.userId).map((product, index) => 
  <>
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{p: 2}}>
        <Typography component='h2' variant='h5' sx={{p: 2}}>
            {product.item}
        </Typography>
        <CardMedia 
          sx={{pt: '56%'}}
          image={product.image}/>
        <Typography component='h2' variant='h5' sx={{p: 1}}>
            ${product.price}
        </Typography>
      </Card>    
    </Grid>
  </>
)
  
  let message
  if(loggedIn.userId > 0) {
    message = <>
    <Container maxWidth='sm' margintop={5} sx={{mt: 3, mb: 8}}>
      <Typography component='h1' variant='h2'>
        Products Available
      </Typography>
    </Container>
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {productListIn}
      </Grid>
    </Container>
  </>
  } else {
    message = <>
    <Container maxWidth='sm'>
      <Typography component='h5' variant='h5' sx={{mt: 3}}>
        Please Login/SignUp!
      </Typography>
      <Typography component='h1' variant='h2' sx={{mt: 3, mb:8}}>
        Products Available
      </Typography>
    </Container>
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {productListOut}
      </Grid>
    </Container>
  </>
  }

  return (
    <>
     {message}
      
      <Routes>
        <Route path='/product-info' />
      </Routes>
    </>
  );
}

export default Home;