import axios from "axios";
const getImageDataHandler = async (number) => {
  const MY_API = import.meta.env.VITE_CAT_API_ADDR;
  const API_KEY = import.meta.env.VITE_CAT_API_KEY;
  const LIMIT_PAGE_NUM = import.meta.env.VITE_CAT_ONE_PAGE_NUM;
  const PAGING_NUMBER = number;
  const RESPONSE_DATA = await axios.get(MY_API, {
    params: {
      limit: LIMIT_PAGE_NUM,
      page: PAGING_NUMBER,
      api_key: API_KEY,
    },
  });

  return RESPONSE_DATA.data;
};

export default getImageDataHandler;
