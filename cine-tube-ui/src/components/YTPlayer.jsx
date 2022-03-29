import React from 'react'
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const YTPlayer = () => {
  return (
    < >
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
  <Box gridColumn="span 8">
    <Item>
    <Player src="http://localhost:5000/video" dimensions={{ width: "640px", height: "360px" }} >
            {(ref, props) => <video ref={ref} {...props} autoPlay loop />}
        </Player>
    </Item>
  </Box>
  <Box gridColumn="span 4">
    <Item>Comment</Item>
  </Box>
  
</Box>
        
    </>
  )
}

export default YTPlayer