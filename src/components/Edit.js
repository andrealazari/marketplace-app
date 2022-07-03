import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Edit({selectedProduct, editProduct, editChange, setSelectedProduct}) {
  return(
    <>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' marginBottom={5}>
          Edit Item
        </Typography>
      </Container>
      <Container
      component="form" noValidate onSubmit={editProduct} maxWidth='sm'
      >
        <Card sx={{p: 5}} >
          <Box >
            <TextField  
              placeholder={selectedProduct.item}
              label='Item'
              fullWidth
              onChange={event => setSelectedProduct({...selectedProduct, item: event.target.value })}
              value={selectedProduct.item}
              sx={{m: 1}}
              />
              <TextField  
              placeholder={selectedProduct.price}
              label='Price'
              fullWidth
              onChange={event => setSelectedProduct({...selectedProduct, price: event.target.value })}
              value={selectedProduct.price}
              sx={{m: 1}}
              />
              <TextField  
              placeholder={selectedProduct.description}
              label='Description'
              fullWidth
              onChange={event => setSelectedProduct({...selectedProduct, description: event.target.value })}
              value={selectedProduct.description}
              sx={{m: 1}}
            /> 
            <Button
              sx={{mt:3}}
              type="submit"
              variant="contained"
              // onClick={editProduct}
            >Edit</Button>
            <Link to="/sales" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained"
                size='small'
                sx={{p: 0.85, ml:2, mt:3}}
                >
                Go Back
              </Button>
            </Link>
          </Box>
        </Card>
      </Container>
    </>
  )
}

export default Edit