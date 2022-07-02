import { Box, Typography, TextField, Button, CardContent, CardActions, Card, Grid, Container } from "@mui/material";
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

function Edit({selectedProduct, editProduct, editChange}) {
  return(
    <>
      <Container>
        <TextField  
          placeholder={selectedProduct.item}
          // value={selectedProduct.item}
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
          onChange={editChange}
        >Edit</Button>
        <Link to="prduct-edit">
          <Button 
            variant="contained"
            size='small'
            >
            Go Back
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default Edit