import axios from "axios";

const getSearch = async (input) => {
  let response = await axios.get(`/search/users?q=${input}`);
  return response.data.items;
};

export { getSearch };
