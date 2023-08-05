import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import {CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video}) => {
  const videoId=video.snippet.videoId;
  const snippet=video.snippet;

  return (
    <Card sx={{width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }} >
      <Link to={videoId ? `/video/${videoId}` :demoVideoUrl } >
        <CardMedia image={snippet?.thumbnail?.high?.url}
        alt={snippet?.videoid}
        sx={{width: 358, height: 180}}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '160px' }} />
         <Link to={videoId ? `/video/${videoId}` :demoVideoUrl } >
          <Typography variant= "subtitle1" fontWeight="bold" color="#FFF" >
            {snippet?.title || demoVideoTitle}
          </Typography>
         </Link>
         <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` :demoChannelUrl } >
          <Typography variant= "subtitle2" fontWeight="bold" color="gray" >
            {demoChannelTitle}
            <CheckCircle sx ={{ fontSize: 12, color: 'gray', ml: '5px'}} />
          </Typography>
         </Link>
      <CardContent/>
    </Card>
  )
}

export default VideoCard