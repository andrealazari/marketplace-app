import {Typography, Button, CardActions, Card, Grid, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Home({ products, selectedProductChange, sortPrice, sortName, setSelectedProduct, loggedIn, isLogged}) {
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

  let productList =  products.filter(p => p.userid != loggedIn.userId).map((product, index) => 
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

  return (
    <>
     <Container maxWidth='sm'>
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

        >Sort By Price</Button>
      </Container>
      <Container maxWidth='md'>
        <Grid container spacing={4}>
          {productList}
        </Grid>
      </Container>
      
      <Routes>
        <Route path='/product-info' />
      </Routes>
    </>
  );
}

export default Home;