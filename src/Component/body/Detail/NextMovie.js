import React, { useState, useEffect } from "react";
import SingleMovie from "Component/body/Detail/SingleMovie";
import { getMovie } from "Component/common/GetData";

const NextMovie = (props) => {
  const [listMovie, setListMovie] = useState();
  
  useEffect(() => {
    getMovie("/discover/movie?")
      .then((res) => {
        let arr = res.filter(
          (item) => item.poster_path && item.title && item.backdrop_path
        );
        return arr;
      })
      .then((data) => {
        setListMovie(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="col-md-4 single-right">
        <h3>Up Next</h3>
        {listMovie && renderMovie(listMovie)}
        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

function renderMovie(array) {
  return array.map((item, index) => {
    return index < 8 ? <SingleMovie key={index} movie={item} /> : "";
  });
}

export default NextMovie;
