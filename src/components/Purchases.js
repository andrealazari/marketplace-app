import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container, CardMedia } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Purchases({purchases, loggedIn}) {
  const productList = purchases.filter(p => p.userid != loggedIn.userId).map((product, index) => 
   <>
    <Container maxWidth='md' key={index}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} >
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
        </Card>    
      </Grid>
    </Grid>
   </Container>
 </>
)
  return(
    <>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          My Purchases
        </Typography>
      </Container>
      {/* <Container maxWidth='md' >
        <Grid container spacing={4}> */}
          {productList}
        {/* </Grid>
      </Container> */}
    </>
  )
}

export default Purchases