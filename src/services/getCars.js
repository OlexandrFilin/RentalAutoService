import axios from 'axios';

const baseUrl = 'https://65d71b2727d9a3bc1d7a3111.mockapi.io/api';

axios.defaults.baseURL = baseUrl;

const getAllCars = async nomPage => {
  const url = new URL(`${baseUrl}/adverts`); // Створюємо новий об'єкт URL для кожного запиту

  url.searchParams.append('page', nomPage);
  url.searchParams.append('limit', 12);

  try {
    const response = await axios.get(url.toString()); // Потрібно передати рядок URL, а не об'єкт URL
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Передача помилки далі для обробки вище
  }
};

export { getAllCars };
