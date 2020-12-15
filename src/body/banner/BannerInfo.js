import React, { Component } from "react";
import ListMovie from "body/banner/ListMovie";
import axios from "axios";
import Dotdotdot from "react-dotdotdot";

const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

class BannerInfo extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      currentMovie: null,
      movieList: null,
      index: 0,
      progressbar: "",
    };
    this.chooseMovie = this.chooseMovie.bind(this);
    this.changeNextMovie = this.changeNextMovie.bind(this);
    this.changePreviousMovie = this.changePreviousMovie.bind(this);
  }
  changeNextMovie() {
    let arr = this.state.movieList;
    let index = 0;
    this.timeNew();
    if (this.state.index < arr.length - 1) {
      this.setState({
        currentMovie: arr[this.state.index + 1],
        index: this.state.index + 1,
        progressBar: "none",
      });
      index = this.state.index + 1;
    } else {
      this.setState({
        currentMovie: arr[0],
        index: 0,
        progressBar: "",
      });
      index = 0;
    }
    this.scrollTopEl(index);
  }
  timeNew = () =>
    setTimeout(() => {
      this.setState({
        progressBar: "",
      });
    }, 10);

  changePreviousMovie() {
    let arr = this.state.movieList;
    let index = 0;
    this.timeNew();
    if (this.state.index > 0) {
      this.setState({
        currentMovie: arr[this.state.index - 1],
        index: this.state.index - 1,
        progressBar: "none",
      });
      index = this.state.index;
    } else {
      this.setState({
        currentMovie: arr[arr.length - 1],
        index: arr.length - 1,
        progressBar: "none",
      });
      index = arr.length;
    }
    this.scrollTopEl(index);
  }
  scrollTopEl = (index) => {
    const div = this.myRef.current;
    if (index > 4) {
      let value = (index - 4) * (div.clientHeight / 5);
      div.scrollTop = value;
    } else if (index === 0) {
      div.scrollTop = 0;
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1",
    })
      .then((res) => {
        let tmp = [];
        for (var i of res.data.results) {
          tmp.push({
            id: i.id,
            overview: i.overview,
            title: i.title,
            poster_path: URL_IMAGE_HD + i.poster_path,
            release_date: i.release_date,
            vote_average: i.vote_average,
            vote_count: i.vote_count,
            backdrop_path: URL_IMAGE_HD + i.backdrop_path,
          });
        }
        return tmp;
      })
      .then((doc) => {
        this.setState({
          movieList: doc,
          currentMovie: doc[this.state.index],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  chooseMovie(event) {
    this.timeNew();
    this.setState({
      currentMovie: this.state.movieList[event],
      index: event,
      progressBar: "none",
    });
    this.scrollTopEl();
  }

  showListMovie() {
    return this.state.movieList ? (
      this.state.movieList.map((movie, arrIndex) => {
        return (
          <ListMovie
            key={movie.id}
            index={arrIndex}
            movie={movie}
            currentMovieIndex={this.state.index}
            chooseMovie={this.chooseMovie}
          />
        );
      })
    ) : (
      <p>Loading...</p>
    );
  }

  timeOut = null;
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentMovie !== prevState.currentMovie) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => this.changeNextMovie(), 6000);
    }
  }

  render() {
    return (
      <div>
        <div id="slidey">
          <div className="slidey-row row">
            <div
              className="slidey-image col-md-8"
              style={{
                backgroundImage: `url(${this.state.currentMovie?.backdrop_path})`,
              }}
            >
              <div
                className="slidey-overlay"
                style={{ opacity: 1, display: "block" }}
              >
                <p className="slidey-overlay-title">
                  {this.state.currentMovie?.title}
                </p>
                <Dotdotdot clamp="2">
                  <p className="slidey-overlay-description">
                    {this.state.currentMovie?.overview}
                  </p>
                </Dotdotdot>
                <span
                  className="slidey-progress"
                  style={{
                    width: "1125.77",
                    overflow: "hidden",
                    display: `${this.state.progressBar}`,
                  }}
                ></span>
              </div>
              <div
                className="slidey-controls slidey-controls-previous"
                onClick={this.changePreviousMovie}
              >
                <i className="fa fa-chevron-left"></i>
              </div>
              <div
                className="slidey-controls slidey-controls-next"
                onClick={this.changeNextMovie}
              >
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
            <div className="slidey-list col-md-4" ref={this.myRef}>
              <ul>{this.showListMovie()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerInfo;
