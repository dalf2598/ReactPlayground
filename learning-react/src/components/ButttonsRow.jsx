import { Button, Stack, Divider } from '@mui/material'
import React from 'react'
import axios from 'axios';

export default function ButttonsRow({data, setData}) {
  
  const updateData = async () => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    setData({
      header: response.headers,
      body: response.data[0]
    });
    
  }

  return (
    <Stack 
        direction='row' 
        justifyContent='space-around' 
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ backgroundColor: 'grey.800', padding: '10px',  borderRadius: '10px'}}
        >
        <Button 
        variant="outlined"
        onClick={updateData}
        >Get</Button>
        
        <Button variant="outlined">Post</Button>
        <Button variant="outlined">Put</Button>
        <Button variant="outlined">Delete</Button>
    </Stack>
  )
}
