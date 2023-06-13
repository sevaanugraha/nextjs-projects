import axios from "axios";

export const fetchWPT = async (startDate, endDate) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/world_poker_tourname?per_page=100&after=${startDate}&before=${endDate}`;
  const result = await axios.get(url)
  return result.data;
};
