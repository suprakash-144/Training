import axios from "axios";

const apiFetch = async (search, setloading, setdata) => {
  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: {
      location: search,
      format: "json",
      u: "c",
    },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  try {
    setloading(true);
    const res = await axios.request(options);
    setdata(res.data);
    setloading(false);
  } catch (error) {
    alert(error);
  } finally {
    setloading(false);
  }
};

export default apiFetch;
