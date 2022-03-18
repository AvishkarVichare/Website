import React from 'react'
// import {VideosData} from './VideosData';
import ReactPlayer from 'react-player';
import '../css/videos.css'

const Videos = () => {
  return (
<div className='main'>
   <h2>Watch Videos</h2>
 <div className='videos'>
 <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=fT5K9LfNyhc"
      className="react-player"
      
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
 <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/embed/Ipzhll9ymjo"
      className="react-player"
      
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
 <div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/embed/Ipzhll9ymjo"
      className="react-player"
      
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
  

 </div>
    {/* <a href="">Watch more videos on Our YouTube Channel</a> */}
</div>
  
  )
}

export default Videos