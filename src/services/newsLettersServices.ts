import axios from 'axios';

export async function fetchNewsletters() {
  try {
    const response = await axios.get(`${process.env.BASE_URL_LOCAL}/api/newsletters`);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: 'Failed to fetch newsletters' };
  }
}
