import axios from "axios";




export const getInfoVideo = async (URL: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_API }/info`,
      {
        params: {
          url: URL
        }
      }
    );

    return response.data;

  } catch (err) {
    alert(`Sentimos la molestias, por favor intente mas tarde`);
    console.error(err);
    return null;
  }
};
