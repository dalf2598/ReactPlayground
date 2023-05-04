import React, { useEffect } from 'react'
import { Container, Grid, Typography, Box } from '@mui/material';
import ButttonsRow from './components/ButttonsRow';
import ResponseCont from './components/ResponseCont';

export default function App() {

  const [data, setData] = React.useState(
    {
      'header': 'header',
      'body': 'body'
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Container  maxWidth='lg' sx={{ marginTop: 4}}>
      <Grid container spacing={5}>
          <Grid item md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <Typography variant='h3'> API PRACTICE</Typography>
            </Box>
          </Grid>
          <Grid item md={12}>
            <ButttonsRow data ={data} setData={setData} />
          </Grid>
          <Grid item md={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
              <Typography variant='h4'> Response</Typography>
            </Box>
          </Grid>
          <Grid item md={12}>
            <ResponseCont title='Header'data = {JSON.stringify(data.header)}/>
            <ResponseCont title='Body' data ={JSON.stringify(data.body)}/>
          </Grid>
      </Grid>
      </Container>
    </div>
  )
}
