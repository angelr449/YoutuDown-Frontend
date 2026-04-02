import { useEffect, useState } from "react";
import "./SearchBar.css"
import { getInfoVideo } from '../../../helpers/getInfoVideo';


type SearchBarProps = {
  videoURL: string
  setVideoURL: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({ videoURL, setVideoURL }: SearchBarProps) => {

  const [inputValue, setInputValue] = useState('');
  // const [videoURL, setVideoURL] = useState('');

  




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
      console.log({ infoVideo });
    };

    fetchVideoInfo();

  }, [videoURL]);



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
