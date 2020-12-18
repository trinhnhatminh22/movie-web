import React, { Component } from "react";
import IndexHeader from "Component/header/IndexHeader";
import Navbar from "Component/body/navbar/Navbar";
import BannerInfo from "Component/body/banner/BannerInfo";
import Banner from "Component/body/banner/Banner";
import Footer from "Component/footer/footer";
import General from "Component/body/General/General";
class Home extends Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <Navbar />
        <BannerInfo />
        <Banner />
        <General />
        <Footer />
      </div>
    );
  }
}

export default Home;
