import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Edit({selectedProduct, editProduct, editChange, setSelectedProduct}) {
  return(
    <>
      <Box
      component="form" noValidate onSubmit={editProduct}
      >
        <Container  >
          <TextField  
            placeholder={selectedProduct.item}
            label='Item'
            onChange={event => setSelectedProduct({...selectedProduct, item: event.target.value })}
            value={selectedProduct.item}
            />
            
          <Typography component='h2' variant='h5'>
            {selectedProduct.price}
          </Typography>
          <Typography component='h2' variant='h5'>
            {selectedProduct.description}
          </Typography>
        </Container>
        <Container>
          <Button
            type="submit"
            variant="contained"
            // onClick={editProduct}
          >Edit</Button>
          <Link to="/sales">
            <Button 
              variant="contained"
              size='small'
              >
              Go Back
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  )
}

export default Edit