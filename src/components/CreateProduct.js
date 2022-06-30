import { Box, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";

function CreateProduct({ currentProduct, setCurrentProduct, addProduct, products }) {
  
  return (
    <>
      <Box component="form" noValidate onSubmit={addProduct} >
        <Container>
          <Typography>New Product to Sell</Typography>
        </Container>
        <Container sx={{m: 1}}>
          <Box>
            <TextField 
              value={currentProduct.item}
              label='Item'
              onChange={event => setCurrentProduct({...currentProduct, item: event.target.value })}
            />
          </Box>
        </Container>
        <Container sx={{m: 1}}>
          <Box>
            <TextField 
              value={currentProduct.price}
              label='Price'
              onChange={event => setCurrentProduct({...currentProduct, price: event.target.value })}
            />
          </Box>
        </Container>
        <Container sx={{m: 1}}>
          <Box>
            <TextField 
              value={currentProduct.image}
              label='Image'
              onChange={event => setCurrentProduct({...currentProduct, image: event.target.value })}
            />
          </Box>
        </Container>
        <Container sx={{m: 1}}>
          <Box>
            <TextField 
              value={currentProduct.description}
              label='Description'
              onChange={event => setCurrentProduct({...currentProduct, description: event.target.value })}
            />
          </Box>
        </Container>
          <Button
            type="submit"
            variant="contained"
            sx={{m: 1}}
          >Add Item</Button>

      </Box>
    </>

  );
}

export default CreateProduct;