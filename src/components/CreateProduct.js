import { Box, Typography, TextField, Button, Container, Card } from "@mui/material";

function CreateProduct({ currentProduct, setCurrentProduct, addProduct, products, login }) {
  return (
    <>
      <Box component="form" noValidate onSubmit={addProduct} >
        <Container  maxWidth='sm'>
          <Typography component='h1' variant='h2'>Sell a Product</Typography>
          <Typography component='h5' variant='h5' marginBottom={5}>What do you want to sell?</Typography>
        </Container>
        <Container maxWidth='md'sx={{mx: 'auto'}}>
          <Card sx={{p: 3}}>
            <Box sx={{m: 1}}>
              <TextField 
                value={currentProduct.item}
                label='Item'
                fullWidth
                required
                onChange={event => setCurrentProduct({...currentProduct, item: event.target.value })}
              />
            </Box>
            <Box sx={{m: 1}}>
              <TextField 
                value={currentProduct.price}
                label='Price'
                fullWidth
                required
                onChange={event => setCurrentProduct({...currentProduct, price: event.target.value })}
              />
            </Box>
            <Box sx={{m: 1}}>
              <TextField 
                value={currentProduct.image}
                label='Image'
                fullWidth
                required
                onChange={event => setCurrentProduct({...currentProduct, image: event.target.value })}
              />
            </Box>
            <Box sx={{m: 1}}>
              <TextField 
                value={currentProduct.description}
                label='Description'
                fullWidth
                required
                onChange={event => setCurrentProduct({...currentProduct, description: event.target.value })}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{m: 1}}
            >Add Item
            </Button>
          </Card>
        </Container>
          

      </Box>
    </>

  );
}

export default CreateProduct;