import axios from "axios";

const urlHead = "https://api.themoviedb.org/3";
const apiKey = "api_key=1e2d3e04a46a4b641682a83ebd1b0bf1";
const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

export const GetData = async (data) => {
  let urlinput = urlHead + data + apiKey;
  let arr = [];
  await axios({
    method: "get",
    url: urlinput,
  }).then((res) => {
    arr = res.data;
  });
  return arr;
};
export const getMovie = async (data) => {
  let urlIn = urlHead + data + apiKey;
  let arr = [];
  await axios({
    method: "get",
    url: urlIn,
  }).then((res) => {
    arr = res.data.results.map((item)=>(
        {
            ...item,
            poster_path: URL_IMAGE_HD + item.poster_path,
            backdrop_path: URL_IMAGE_HD +item.backdrop_path,
            release_date: item.release_date?item.release_date:'2020-01-01',
        }
    ));
  });
  return arr;
};
