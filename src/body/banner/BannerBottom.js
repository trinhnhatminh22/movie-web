import React, { Component } from "react";
import axios from "axios";
import SmallBanner from "body/banner/SmallBanner";
const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

class BannerBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: null,
      index: 0,
      maxWidth: 0,
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/trending/all/day?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1",
    })
      .then((res) => {
        let arr = [];
        for (var i of res.data.results) {
          if (i.title && i.release_date) {
            arr.push({
              id: i.id,
              title: i.title,
              vote: i.vote_average,
              poster_path: URL_IMAGE_HD + i.poster_path,
              backdrop_path: i.backdrop_path,
              release_date: i.release_date,
            });
          }
        }
        return arr;
      })
      .then((data) => {
        this.setState({
          listMovie: data,
          maxWidth: (data.length - 5) * 222,
        });
      })
      .catch((err) => console.log(err));
  }

  slideBanner() {
    if (Math.abs(this.state.index) < this.state.maxWidth) {
      this.setState({
        index: this.state.index - 222,
      });
    } else if (Math.abs(this.state.index) === this.state.maxWidth) {
      this.setState({
        index: 0,
      });
    }
  }
  showBannerBottom() {
    return this.state.listMovie ? (
      this.state.listMovie.map((movie, index) => {
        return <SmallBanner key={index} movie={movie} />;
      })
    ) : (
      <p>Loading...</p>
    );
  }

  timeOut = null;
  componentDidUpdate() {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => this.slideBanner(), 3000);
  }

  render() {
    return (
      <div className="banner-bottom">
        <div className="container">
          <div className="w3_agile_banner_bottom_grid">
            <div
              id="owl-demo"
              className="owl-carousel owl-theme"
              style={{ opacity: "1", display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  style={{
                    width: `${this.state.maxWidth + 5 * 300}px`,
                    left: "0",
                    display: "block",
                    transition: "all 800ms ease 0s",
                    transform: `translate3d(${this.state.index}px, 0px, 0px)`,
                  }}
                >
                  {this.showBannerBottom()}
                </div>
              </div>

              <div className="owl-controls clickable">
                <div className="owl-pagination">
                  <div className="owl-page active">
                    <span className=""></span>
                  </div>
                  <div className="owl-page">
                    <span className=""></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerBottom;
