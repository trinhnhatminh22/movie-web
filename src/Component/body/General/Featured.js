import React, { useState, useEffect } from "react";
import SmallBanner from "Component/body/banner/SmallBanner";
import { getMovie } from "Component/common/GetData";

const Featured = () => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getMovie(
      "/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&"
    )
      .then((res) => {
        setListMovie(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{showListMovie(listMovie)}</div>;
};

const showListMovie = (listMovie) => {
  return listMovie.map((item, index) => {
    return (
      <div className="col-md-2 w3l-movie-gride-agile">
        <SmallBanner key={index} movie={item} />
      </div>
    );
  });
};
export default Featured;
