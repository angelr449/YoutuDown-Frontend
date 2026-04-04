import { useState } from "react"
import { HeaderPage } from "./components/HeaderPage/HeaderPage"
import { RenderVideo } from "./components/RederVideo/RenderVideo"
import { SearchBar } from "./components/SearchBar/SearchBar"
import { VideoFormats } from "./components/VideoFormats/VideoFormats"

import {type VideoData} from "./data/infoVideo.data";


export const YoutuDownApp = () => { 
const [videoURL, setVideoURL] = useState('');
const [infoVideo, setInfoVideo] = useState<VideoData | null>(null)


const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
  const match = videoURL.match(regex);
  const videoId= match ? match[1] : null;
  

  return (
    <>
      <HeaderPage />

      <SearchBar videoURL={videoURL} setVideoURL={setVideoURL} setInfoVideo ={setInfoVideo}/>
      <RenderVideo videoId={videoId} />
      <VideoFormats infoVideo={infoVideo} videoURL={videoURL}/>

    </>
  )
}
