import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import YTPlayer from './components/YTPlayer';

function App() {
  return (
    <div className="App">
       <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#f9f9f9', height: '100vh' }} >
          <YTPlayer/>
        </Box>
      </Container>
    
      
    </div>
  );
}

export default App;
