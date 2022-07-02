import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid } from "@mui/material";
import { Container } from "@mui/system";
import {Routes, Route, Link} from 'react-router-dom'

function Sales({products, selectedProductEdit, deleteFromSales}) {
  const productList = products.map((product, index) => 
    <Card key={index}>
      <CardContent>
       <Typography component='h2' variant='h5'>
          {product.item}
        </Typography>
        <Typography component='h2' variant='h5'>
          {product.image}
        </Typography>
        <Typography component='h2' variant='h5'>
          {product.price}
        </Typography>
        <Typography component='h2' variant='h5'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/product-edit'>
          <Button 
            variant="contained"
            size='small'
            onClick={selectedProductEdit}
            id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
            >
            Edit
          </Button>
          <Button 
            variant="contained"
            size='small'
            onClick={deleteFromSales}
            id={product.item + '-' + product.price + '-' + product.description + '-' + product.id + '-' + product.image}
            >
            Delete
          </Button>
        </Link>
      </CardActions>
    </Card>
  )

  return (
    <>
     <Container maxWidth='sm'>
        <Typography component='h1' variant='h2'>
          My items to sell
        </Typography>
      </Container>
      <Container maxWidth='md'>
        <Grid container>
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