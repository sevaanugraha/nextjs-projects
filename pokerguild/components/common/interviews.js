import axios from "axios";

export const fetchInterviews = async (page = 1) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/interview?per_page=15&page=${page}`;
  const result = await axios.get(url);

  const currentPage = Number(page);
  const total = Number(result?.headers?.["x-wp-total"]);
  const totalPages = Number(result?.headers?.["x-wp-totalpages"]);

  const data = result.data;

  result.data = {
    data,
    currentPage,
    total,
    totalPages,
  };

  return result;
};

export const fetchInterviewsById = async (id) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/interview/${id}`;
  const result = await axios.get(url);

  return result;
};

export const fetchInterviewsCategory = async () => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/interview_categories`;
  const result = await axios.get(url);

  return result;
};

export const fetchInterviewsByCategoryId = async (id) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/interview?interview_categories=${id}
  `;

  const result = await axios.get(url);

  const currentPage = Number(1);
  const total = Number(result?.headers?.["x-wp-total"]);
  const totalPages = Number(result?.headers?.["x-wp-totalpages"]);

  const data = result.data;

  result.data = {
    data,
    currentPage,
    total,
    totalPages,
  };

  return result;
};
