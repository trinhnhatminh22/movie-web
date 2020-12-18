import "./folder-css/css/bootstrap.css";
import "./folder-css/css/styles.css";
import "./folder-css/css/contactstyle.css";
import "./folder-css/css/faqstyle.css";
import "./folder-css/css/flexslider.css";
import "./folder-css/css/font-awesome.min.css";
import "./folder-css/css/googlefont.css";
import "./folder-css/css/jquery.slidey.min.css";
import "./folder-css/css/medile.css";
// import "./folder-css/css/news.css";
import "./folder-css/css/owl.carousel.css";
import "./folder-css/css/popuo-box.css";
import "./folder-css/css/single.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from 'Component/Pages/Home'
import MovieDetail from 'Component/Pages/MovieDetail';


function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path={`/detail/:movieId`}>
            <MovieDetail />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route>  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
