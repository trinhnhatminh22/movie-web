import React, { useState } from "react";
import Featured from "Component/body/General/Featured";
import Topview from "Component/body/General/Topview";
import TopRating from "./TopRating";

const General = () => {
  const [tabChoose, setTabChoose] = useState(0);

  function chooseAction(event) {
    switch (event.target.textContent) {
      case "Featured":
        setTabChoose(0);
        break;
      case "Top viewed":
        setTabChoose(1);
        break;
      case "Top Rating":
        setTabChoose(2);
        break;
      case "Recently Added":
        setTabChoose(3);
        break;
      default:
        break;
    }
  }
  return (
    <div className="general">
      <h4 className="latest-text w3_latest_text">Featured Movies</h4>
      <div className="container">
        <div
          className="bs-example bs-example-tabs"
          role="tabpanel"
          data-example-id="togglable-tabs"
        >
          <ul id="myTab" className="nav nav-tabs" role="tablist">
            <li
              role="presentation"
              className={`${tabChoose === 0 ? "active" : ""}`}
            >
              <a
                href="#home"
                id="home-tab"
                role="tab"
                data-toggle="tab"
                aria-controls="home"
                aria-expanded="true"
                onClick={chooseAction}
              >
                Featured
              </a>
            </li>
            <li
              role="presentation"
              className={`${tabChoose === 1 ? "active" : ""}`}
            >
              <a
                href="#profile"
                role="tab"
                id="profile-tab"
                data-toggle="tab"
                aria-controls="profile"
                aria-expanded="false"
                onClick={chooseAction}
              >
                Top viewed
              </a>
            </li>
            <li
              role="presentation"
              className={`${tabChoose === 2 ? "active" : ""}`}
            >
              <a
                href="#rating"
                id="rating-tab"
                role="tab"
                data-toggle="tab"
                aria-controls="rating"
                aria-expanded="true"
                onClick={chooseAction}
              >
                Top Rating
              </a>
            </li>
            <li
              role="presentation"
              className={`${tabChoose === 3 ? "active" : ""}`}
            >
              <a
                href="#imdb"
                role="tab"
                id="imdb-tab"
                data-toggle="tab"
                aria-controls="imdb"
                aria-expanded="false"
                onClick={chooseAction}
              >
                Recently Added
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div
              role="tabpanel"
              className={`tab-pane fade ${tabChoose === 0 ? "active in" : ""}`}
            >
              <div className="w3_agile_featured_movies">
                <Featured />
              </div>
            </div>
            <div
              role="tabpanel"
              className={`tab-pane fade ${tabChoose === 1 ? "active in" : ""}`}
            >
              <div className="w3_agile_featured_movies">
                <Topview />
              </div>
            </div>
            <div
              role="tabpanel"
              className={`tab-pane fade ${tabChoose === 2 ? "active in" : ""}`}
            >
              <div className="w3_agile_featured_movies">
                <TopRating />
              </div>
            </div>
            <div
              role="tabpanel"
              className={`tab-pane fade ${tabChoose === 3 ? "active in" : ""}`}
            >
              <div className="w3_agile_featured_movies">
                <Featured />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
