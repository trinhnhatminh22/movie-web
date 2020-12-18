import React from "react";


const MovieInfo = (props) => {
  return (
    <div>
      <div className="song">
        <div className="song-info">
          <h3>{`${props.movie?.title} - Official Trailer 2`}</h3>
        </div>
        <div className="video-grid-single-page-agileits">
          <div data-video="dLmKio67pVQ" id="video">
            {" "}
            <img src={props.movie?.backdrop_path} alt="" className="img-responsive" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
