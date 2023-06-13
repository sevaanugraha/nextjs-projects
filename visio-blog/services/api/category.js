import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category`);
    return response;
  } catch (error) {
    console.error("Error while calling get categories api:", error);
  }
};

export const getClientSideCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/category/client-side-categories`);
    return response;
  } catch (error) {
    console.error("Error while calling client-categories api:", error);
  }
};


export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/category/${id}`);
    return response;
  } catch (error) {
    console.error("Error while calling get single category api:", error);
  }
};
