import { Typograph, Box, Typography, TextField, Button } from "@mui/material";
import { Container } from "@mui/system";

function CreateProduct
() {

  return (
    <>
      <form>
        <Container>
          <Typography>New Product to Sell</Typography>
        </Container>
        <Container>
          <Box>
            <Typography>What are you selling?</Typography>
            <TextField />
          </Box>
        </Container>
        <Container>
          <Box>
            <Typography>Price</Typography>
            <TextField />
          </Box>
        </Container>
        <Container>
          <Box>
            <Typography>Images</Typography>
            <TextField />
          </Box>
        </Container>
        <Container>
          <Box>
            <Typography>Description</Typography>
            <TextField />
          </Box>
        </Container>
        <Button>Add Item</Button>
      </form>
    </>

  );
}

export default CreateProduct
;