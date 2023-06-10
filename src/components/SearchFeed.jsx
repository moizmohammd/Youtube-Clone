import React from 'react'
import { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

const SearchFeed = () => {
  const[videos,setVideos]=useState([])
  const {searchTerm}=useParams()
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
        Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed