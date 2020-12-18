import React, { Component } from "react";
import SmallBanner from "Component/body/banner/SmallBanner";
import { getMovie } from "Component/common/GetData";

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
    getMovie("/trending/all/day?")
      .then((res) => {
        let arr = [];
        arr = res.filter(movie => (movie.title && movie.release_date));
        return arr;
      }).then(data => {
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
    );
  }
}

export default BannerBottom;
