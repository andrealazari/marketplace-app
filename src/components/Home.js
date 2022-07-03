import {Typography, Button, CardActions, Card, Grid, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link} from 'react-router-dom'

function Home({ products, selectedProductChange, sortPrice, sortName}) {
  const productList = products.map((product, index) => 
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
          {/* <Typography component='p' variant='p' fontSize={12}>
              {product.description}
          </Typography> */}
          <CardActions sx={{p: 2}} >
            <Link to='/product-info' style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  p: 1
                }}
                variant="contained"
                size='small'
                onClick={selectedProductChange}
                id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
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
          Products
        </Typography>
      </Container>
      <Container>
        <Button
          variant="contained"
          size='small'
          sx={{m: 3}}
          onClick={products.sort(sortName)}
        >Sort By Name</Button>
        <Button
          variant="contained"
          size='small'
          sx={{m: 3}}
          onClick={products.sort(sortPrice)}
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