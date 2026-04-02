import { useState } from "react"
import { HeaderPage } from "./components/HeaderPage/HeaderPage"
import { RenderVideo } from "./components/RederVideo/RenderVideo"
import { SearchBar } from "./components/SearchBar/SearchBar"
import { VideoFormats } from "./components/VideoFormats/VideoFormats"



export const YoutuDownApp = () => { 
const [videoURL, setVideoURL] = useState('');

const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
  const match = videoURL.match(regex);
  const videoId= match ? match[1] : null;
  console.log(videoId)

  return (
    <>
      <HeaderPage />

      <SearchBar videoURL={videoURL} setVideoURL={setVideoURL}/>
      <RenderVideo videoId={videoId} />
      <VideoFormats />

    </>
  )
}
