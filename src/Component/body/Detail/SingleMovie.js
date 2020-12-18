import React from "react";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <div>
      <div className="single-grid-right">
        <div className="single-right-grids">
          <div className="col-md-4 single-right-grid-left">
            <Link to={`/detail/${props.movie?.id}`}>
              <img src={props.movie?.poster_path} alt="" />
            </Link>
          </div>
          <div className="col-md-8 single-right-grid-right">
            <Link to={`/detail/${props.movie?.id}`} className="title">
              {props.movie?.title}
            </Link>
            <p className="author">
              <Link to={`/detail/${props.movie?.id}`} className="author">
                John Maniya
              </Link>
            </p>
            <p className="views">2,114,200 views</p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
