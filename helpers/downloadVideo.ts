import axios from "axios";


export const downloadVideo = async(videoURL:string , formatId:string) => {

  try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API }/download-stream`,{
    params:{

      url: videoURL,
      formatId
    },
    responseType: 'blob'
  })
  return response.data;
  } catch (error) {
    alert(`Sentimos la molestias, por favor intente mas tarde`)
    console.log(error)
    return null;
    
  }


}


