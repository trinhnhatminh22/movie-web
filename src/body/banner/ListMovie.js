import React, { Component } from "react";
import Dotdotdot from "react-dotdotdot";

const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

class ListMovie extends Component {
  constructor(props) {
    super(props);
    this.choosenMovie = this.choosenMovie.bind(this);
  }

  choosenMovie(e) {
    return (event) => {
      this.props.chooseMovie(e);
    };
  }

  render() {
    return (
      <div>
        <li
          style={{ height: "100px" }}
          className={
            this.props.currentMovieIndex === this.props.index
              ? "slidey-active"
              : ""
          }
          onClick={this.choosenMovie(this.props.index)}
        >
          <table className="slidey-list-table">
            <tbody>
              <tr>
                <td rowspan="2" className="slidey-list-thumbnail-container">
                  <div
                    className="slidey-list-thumbnail"
                    style={{
                      backgroundImage: `url(${
                        URL_IMAGE_HD + this.props.movie?.backdrop_path
                      })`,
                      width: "91px",
                      height: "91px",
                    }}
                  ></div>
                </td>
                <td className="slidey-list-title">{this.props.movie?.title}</td>
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
                  <Dotdotdot clamp='auto'>
                    <span hidden>{this.props.movie.id}</span>
                    {this.props.movie.overview}
                  </Dotdotdot>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </div>
    );
  }
}

export default ListMovie;
