import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Purchases({purchases}) {
  console.log(purchases)
  const productList = purchases.map((product, index) => 
  <Card key={index}>
    <CardContent>
     <Typography component='h2' variant='h5'>
        {product.item}
      </Typography>
      <Typography component='h2' variant='h5'>
        {product.price}
      </Typography>
      <Typography component='h2' variant='h5'>
        {product.image}
      </Typography>
      <Typography component='h2' variant='h5'>
        {product.description}
      </Typography>
    </CardContent>
  </Card>
)
  return(
    <>
      <Container>
      <Typography component='h2' variant='h5'>
        {productList}
        </Typography>
      </Container>
    </>
  )
}

export default Purchases