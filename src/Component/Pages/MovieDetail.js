import React, { Component } from "react";
import Navbar from "Component/body/navbar/Navbar";
import IndexHeader from "Component/header/IndexHeader";
import Single from "Component/body/Detail/Single";
import Banner from "Component/body/banner/Banner";

class MovieDetail extends Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <Navbar />
        <Single/>
        <Banner/>
      </div>
    );
  }
}

export default MovieDetail;
