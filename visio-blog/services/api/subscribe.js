import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export const subscribeEmailNewsletter = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/subscribe`, payload);
    return response;
  } catch (error) {
    console.error("Error while subscribing newsletter:", error);
    throw error;
  }
};
