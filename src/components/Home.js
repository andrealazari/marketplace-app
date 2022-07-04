import {Typography, Button, CardActions, Card, Grid, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Home({ products, selectedProductChange, sortPrice, sortName, setSelectedProduct, loggedIn}) {
  const navigate = useNavigate()
  
  function selectedProductChange(event) {
    event.preventDefault();
    const productArray = event.target.id.split('|')
   
    const productObj = {
      item: productArray[0],
      price: productArray[1],
      description: productArray[2],
      item_id: productArray[3],
      image: productArray[4]  
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
                id={product.item + '|' + product.price + '|' + product.description + '|' + product.id + '|' + product.image}
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
    <Container maxWidth='sm' marginTop={5} sx={{mt: 3}}>
      <Typography component='h5' variant='h5'>
        Hi {loggedIn.userName}!
      </Typography>
      <Typography component='h1' variant='h2'>
        Products Avaliable
      </Typography>
    </Container>
    <Container>
      <Button
        variant="contained"
        size='small'
        sx={{m: 3}}

      >Sort By Name</Button>
      <Button
        variant="contained"
        size='small'
        sx={{m: 3}}
        onClick={sortPrice}
      >Sort By Price</Button>
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
      <Typography component='h1' variant='h2'>
        Products Avaliable
      </Typography>
    </Container>
    <Container>
      <Button
        variant="contained"
        size='small'
        sx={{m: 3}}

      >Sort By Name</Button>
      <Button
        variant="contained"
        size='small'
        sx={{m: 3}}
        onClick={sortPrice}
      >Sort By Price</Button>
    </Container>
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {productListOut}
      </Grid>
    </Container>
  </>
  }

  // function comparePrice(a, b) {
  //   const priceA = a.price;
  //   const priceB = b.price;
  
  //   let comparison = 0;
  //   if (priceA > priceB) {
  //     comparison = 1;
  //   } else if (priceA < priceB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

  // function sortPrice(products) {
  //   return  products.sort(comparePrice())

  // }

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