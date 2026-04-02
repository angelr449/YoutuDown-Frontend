import axios from "axios";




export const getInfoVideo = async (URL: string) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/youtuDown/info",
      {
        params: {
          url: URL
        }
      }
    );

    return response.data;

  } catch (err) {
    console.error(err);
    return null;
  }
};
