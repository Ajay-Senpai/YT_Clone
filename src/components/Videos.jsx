import {Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos}) => {
   if (!videos || videos.length === 0) {
      return <p>No videos available.</p>;
    }
   return (
   
   <Stack direction="row" flexWrap ="wrap" justifyContent= "start" gap={2} >
       {videos.map((item, id) => (
        <Box key={id}>
           {item.snippet.videoId && <VideoCard video= {item} />}
            {/* {item.id.channelId && <ChannelCard channelDetail= {item} />} */}
        </Box>
     ))}
   </Stack>
  )
}

export default Videos;