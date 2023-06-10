import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
// import './App.css';
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components';

const App =() =>(
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" exact element={<Feed></Feed>}></Route>
      <Route path="/video/:id" element={<VideoDetail></VideoDetail>}></Route>
      <Route path="/channel/:id" element={<ChannelDetail></ChannelDetail>}></Route>
      <Route path="/search/:searchTerm" element={<SearchFeed></SearchFeed>}></Route>
    </Routes>
  </Box>
  </BrowserRouter>
)

export default App;
