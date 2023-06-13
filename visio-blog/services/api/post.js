import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export const getPost = async (page, limit, category, search) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/post?currentPage=${page}&limit=${limit}&category=${category}&search=${search}`
    );
    return response;
  } catch (error) {
    console.error("Error while calling get post api:", error);
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/post/${id}`);
    if (response) {
      return response;
    }
    return {};
  } catch (error) {
    console.error("Error while calling get post by id api:", error);
  }
};

export const getFeaturedPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/post/featured`);
    return response;
  } catch (error) {
    console.error(
      "Error while calling get featured posts from post api:",
      error
    );
  }
};
