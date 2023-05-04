import { Box, Stack ,Typography } from '@mui/material'

export default function ResponseCont({title, data}) {
  return (
    <Stack gap={2} mb={4}>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Typography variant='h4'> {title} </Typography>
      </Box>
      <Box sx={{ p: 2, border: '1px dashed grey', borderRadius: '10px' }}>
      <Typography variant='body1'> {data} </Typography>
      </Box>
    </Stack>
  )
}
