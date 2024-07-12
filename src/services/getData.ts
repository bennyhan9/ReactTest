import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const getPostData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    // Handle success
    return response.data;
  } catch (error) {
    // Handle error
    console.log('Error:', error);
    // Can throw the error or return something meaningful here
    throw error;
  }
}
