import axios from "axios";


export const downloadVideo = async(videoURL:string , formatId:string) => {

  const response = await axios.get('http://localhost:8080/api/youtuDown/download-stream',{
    params:{

      url: videoURL,
      formatId
    },
    responseType: 'blob'
  })
  return response.data;
}


