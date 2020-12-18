import React, { useState, useEffect } from "react";
import SmallBanner from "Component/body/banner/SmallBanner";
import { getMovie } from "Component/common/GetData";

const Topview = () => {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getMovie("/trending/all/week?")
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

export default Topview;
