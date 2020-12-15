import React, { Component } from "react";

class SmallBanner extends Component {
  render() {
    const fullStar = Math.ceil(this.props.movie.vote / 2);
    const haftStar = this.props.movie.vote / 2 === 0 || fullStar > 4 ? 0 : 1;
    const noStar = 5 - fullStar - haftStar;
    let renderFullStar = () => {
      return fullStar > 0
        ? Array(fullStar)
            .fill(1)
            .map((item, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </a>
                </li>
              );
            })
        : "";
    };
    let renderHaftStar = () => {
      return haftStar > 0 ? (
        <li>
          <a href="#">
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </a>
        </li>
      ) : (
        ""
      );
    };
    let renderNoStar = () => {
      return noStar > 0
        ? Array(noStar)
            .fill(1)
            .map((item, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </a>
                </li>
              );
            })
        : "";
    };
    return (
      <div className="owl-item" style={{ width: "222px" }}>
        <div className="item">
          <div className="w3l-movie-gride-agile w3l-movie-gride-agile1">
            <a href="single.html" className="hvr-shutter-out-horizontal">
              <img
                src={this.props.movie.poster_path}
                title="album-name"
                className="img-responsive"
                alt=" "
              />
              <div className="w3l-action-icon">
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </div>
            </a>
            <div className="mid-1 agileits_w3layouts_mid_1_home">
              <div className="w3l-movie-text">
                <h6>
                  <a href="single.html">{this.props.movie.title}</a>
                </h6>
              </div>
              <div className="mid-2 agile_mid_2_home">
                <p>{this.props.movie.release_date.slice(0, 4)}</p>
                {/* <p>{this.props.movie.release_date}</p> */}
                <div className="block-stars">
                  <ul className="w3l-ratings">
                    {renderFullStar()}
                    {renderHaftStar()}
                    {renderNoStar()}
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="ribben">
              <p>NEW</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallBanner;
