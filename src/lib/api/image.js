import axios from "axios";
const getImageDataHandler = async () => {
  const API_KEY = import.meta.env.VITE_CAT_API_KEY;
  const MY_API = "https://api.thecatapi.com/v1/images/search";
  const LIMIT_PAGE_NUM = 20;
  const RESPONSE_DATA = await axios.get(MY_API, {
    params: {
      limit: LIMIT_PAGE_NUM,
      api_key: API_KEY,
    },
  });

  return RESPONSE_DATA.data;
};

export default getImageDataHandler;
