import { Box, Typography, TextField, Button, CardMedia, CardActions, Card, Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link} from 'react-router-dom'

function Sales({products, selectedProductEdit, deleteFromSales}) {
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
      <Typography component='p' variant='p' fontSize={12}>
          {product.description}
      </Typography>
      <CardActions>
          <Link to='/product-edit' style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained"
              size='small'
              onClick={selectedProductEdit}
              id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
              sx={{m: 2}}
              >
              Edit
            </Button>
          </Link>
          <Button 
            variant="contained"
            size='small'
            onClick={deleteFromSales}
            id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
            >
            Delete
          </Button>
          
        </CardActions>
    </Card>    
  </Grid>
  </>


  )

  return (
    <>
     <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          My Items To Sell
        </Typography>
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
  )
}

export default Sales