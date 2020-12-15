import "./css/bootstrap.css";
import "./css/styles.css";
import "./css/contactstyle.css";
import "./css/faqstyle.css";
import "./css/flexslider.css";
import "./css/font-awesome.min.css";
import "./css/googlefont.css";
import "./css/jquery.slidey.min.css";
import "./css/medile.css";
import "./css/news.css";
import "./css/owl.carousel.css";
import "./css/popuo-box.css";
import "./css/single.css";
import "./App.css";

import IndexHeader from 'header/IndexHeader';
import Navbar from "body/navbar/Navbar";
import BannerInfo from "body/banner/BannerInfo";
import BannerBottom from "body/banner/BannerBottom";


function App() {
  return (
    <div className="">
      <IndexHeader />
      <Navbar />
      <BannerInfo/>
      <BannerBottom/>
    </div>
  );
}

export default App;
