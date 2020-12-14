import React, { useEffect, useState } from "react";

const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

function BannerSmall(props) {
   
  return (
    <li style={{ height: "100px" }} className="" onClick={props.funcChoseMovie}>
      <table className="slidey-list-table">
        <tbody>
          <tr>
            <td rowspan="2" className="slidey-list-thumbnail-container">
              <div
                className="slidey-list-thumbnail"
                style={{
                  backgroundImage: `url(${
                    URL_IMAGE_HD + props.movie?.backdrop_path
                  })`,
                  width: "91px",
                  height: "91px",
                }}
              ></div>
            </td>
            <td className="slidey-list-title">{props.movie.title}</td>
          </tr>
          <tr>
            <td
              className="slidey-list-description"
              style={{
                width: "296px",
                height: "74px",
                display: "block",
                overflowWrap: "break-word",
              }}
            >
              {props.movie.overview}
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}


export default BannerSmall;
