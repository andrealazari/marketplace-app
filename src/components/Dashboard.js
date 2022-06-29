import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Dashboard() {
  return (
    <>
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2'>
          My Dashboard
        </Typography>
      </Container>
      <Container maxWidth='md'>
        <Grid container>
          <Grid item>
            <Card>
              <CardMedia 
                image={'https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80'}
                title='Title'
                />
                <CardContent>
                  <Typography component='h2' variant='h5'>
                    Guitar
                  </Typography>
                  <Typography component='h2' variant='h5'>
                    AUD 200.00
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>
                    Edit
                  </Button>
                  <Button size='small'>
                    Delete
                  </Button>
                </CardActions>
              </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;