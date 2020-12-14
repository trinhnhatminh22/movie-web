// import React, { useEffect, useState } from "react";
// import BannerSmall from "body/banner/BannerSmall";
import React, { Component } from "react";
import ListMovie from "body/banner/ListMovie";
import axios from "axios";

const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

// function BannerInfo(props) {
//   const [currentMovie, setCurrentMovie] = useState(0);

//   useEffect(() => {
//     if (props.data.length !== 0) {
//       setCurrentMovie(props.data[0]);
//     }
//   }, [props.data]);

//   return (
//     <div id="slidey">
//       <div className="slidey-row row">
//         <div
//           className="slidey-image col-md-8"
//           style={{
//             backgroundImage: `url(${
//               URL_IMAGE_HD + currentMovie?.backdrop_path
//             })`,
//           }}
//         >
//           <div
//             className="slidey-overlay"
//             style={{ opacity: 1, display: "block" }}
//           >
//             <p className="slidey-overlay-title">{currentMovie?.title}</p>
//             <p className="slidey-overlay-description">
//               {currentMovie?.overview}
//             </p>
//             <span
//               className="slidey-progress"
//               style={{ width: "1125.77", overflow: "hidden" }}
//             ></span>
//           </div>
//           <div className="slidey-controls slidey-controls-previous">
//             <i className="fa fa-chevron-left"></i>
//           </div>
//           <div className="slidey-controls slidey-controls-next">
//             <i className="fa fa-chevron-right"></i>
//           </div>
//         </div>
//         <div className="slidey-list col-md-4">
//           <ul>{bannerSmall(props.data)}</ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function bannerSmall(movieArr, funcChoseMovie) {
//   return movieArr ? (
//     movieArr.map((movie) => <BannerSmall key={movie.id} movie={movie} />)
//   ) : (
//     <p>Loading...</p>
//   );
// }
class BannerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movieList: null,
      index: 0,
    };
    this.chooseMovie = this.chooseMovie.bind(this);
    this.changeNextMovie = this.changeNextMovie.bind(this);
    this.changePreviousMovie = this.changePreviousMovie.bind(this);
  }
  changeNextMovie() {
    let arr = this.state.movieList;
    if (this.state.index < arr.length - 1) {
      this.setState({
        currentMovie: arr[this.state.index + 1],
        index: this.state.index + 1,
      });
    } else {
      this.setState({
        currentMovie: arr[0],
        index: 0,
      });
    }
  }
  changePreviousMovie() {
    let arr = this.state.movieList;
    // for (var i in arr) {
    //   if (arr[i].id === this.state.currentMovie.id) {
    //     if (i > 0) {
    //       this.setState({
    //         currentMovie: arr[i - 1],
    //       });
    //     } else {
    //       this.setState({
    //         currentMovie: arr[arr.length - 1],
    //       });
    //     }
    //     break;
    //   }
    // }
    if (this.state.index > 0) {
      this.setState({
        currentMovie: arr[this.state.index - 1],
        index: this.state.index - 1,
      });
    } else {
      this.setState({
        currentMovie: arr[arr.length - 1],
        index: arr.length - 1,
      });
    }
  }

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
            poster_path: i.poster_path,
            release_date: i.release_date,
            vote_average: i.vote_average,
            vote_count: i.vote_count,
            backdrop_path: i.backdrop_path,
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
    this.setState({
      currentMovie: this.state.movieList[event],
      index: event,
    });
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

  render() {
    return (
      <div>
        <div id="slidey">
          <div className="slidey-row row">
            <div
              className="slidey-image col-md-8"
              style={{
                backgroundImage: `url(${
                  URL_IMAGE_HD + this.state.currentMovie?.backdrop_path
                })`,
              }}
            >
              <div
                className="slidey-overlay"
                style={{ opacity: 1, display: "block" }}
              >
                <p className="slidey-overlay-title">
                  {this.state.currentMovie?.title}
                </p>
                <p className="slidey-overlay-description">
                  {this.state.currentMovie?.overview}
                </p>
                <span
                  className="slidey-progress"
                  style={{ width: "1125.77", overflow: "hidden" }}
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
            <div className="slidey-list col-md-4">
              <ul>{this.showListMovie()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerInfo;
