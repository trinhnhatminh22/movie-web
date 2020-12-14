import BannerInfo from "body/banner/BannerInfo";
import axios from "axios";
import { useState, useEffect } from "react";

function Banner() {
  const [infoArr, setInfoArr] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1",
    })
      .then((res) => {
        let tmp = [];
        for (var i of res.data.results) {
          tmp.push({
            id: i.id,
            overview: i.overview,
            title: i.title,
            poster_path: i.poster_path,
            release_date: i.release_date,
            vote_average: i.vote_average,
            vote_count: i.vote_count,
            backdrop_path: i.backdrop_path,
          });
        }
        return tmp;
      })
      .then((doc) => {
        setInfoArr(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <BannerInfo data={infoArr}></BannerInfo>
    </div>
  );
}

export default Banner;
