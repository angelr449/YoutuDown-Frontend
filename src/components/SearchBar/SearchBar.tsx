import { useEffect, useState } from "react";
import "./SearchBar.css"
import { getInfoVideo } from '../../../helpers/getInfoVideo';
import type { VideoData } from "../../data/infoVideo.data";


type SearchBarProps = {
  videoURL: string
  setVideoURL: React.Dispatch<React.SetStateAction<string>>,
  setInfoVideo: React.Dispatch<React.SetStateAction<VideoData|null>>
}

export const SearchBar = ({ videoURL, setVideoURL, setInfoVideo }: SearchBarProps) => {

  const [inputValue, setInputValue] = useState('');
  

  




  useEffect(() => {

    const timer = setTimeout(() => {

      setVideoURL(inputValue);

    }, 300);

    return () => {
      clearTimeout(timer)
    }


  }, [inputValue, setVideoURL]);

  useEffect(() => {
    if (videoURL === '') return;
    

    
    const fetchVideoInfo = async () => {
      const infoVideo = await getInfoVideo(videoURL);
      setInfoVideo(infoVideo)
      
    };

    fetchVideoInfo();

  }, [videoURL, setInfoVideo]);



  return (
    <div id="search-bar">

      <input type="text" placeholder="what do you want to download?"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        onClick={() => setVideoURL(inputValue)}
      > Buscar </button>
    </div>
  )
}
