// utils/fetchBollywoodNews.js
import axios from 'axios';

const API_KEY = process.env.NEWS_API_KEY; // replace this with your actual NewsAPI key

export async function fetchBollywoodNews() {
  const url = ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return console.log(response.data.articles);
    ; // array of news articles
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}
