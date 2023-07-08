import axios from "axios"

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'b1a3bbc10amsh5ed4a79f57381aap15e862jsn73ff27e2721e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi  = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options );
    return data;
}
