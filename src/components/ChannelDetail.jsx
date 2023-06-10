import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from '.'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Box } from '@mui/material'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail]=useState()
  const [videos,setVideos]=useState(null);
  const { id }= useParams();
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
      <div style={{
        background: 'linear-gradient(90deg, rgba(9,17,94,1) 12%, rgba(158,25,25,1) 23%, rgba(9,17,94,1) 80%);',
    zIndex:10,
    height:'300px'}}/>
    <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" >
        <Box sx={{mr:{sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail