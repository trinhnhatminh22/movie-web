import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieInfo from "Component/body/Detail/MovieInfo";
import NextMovie from "Component/body/Detail/NextMovie";
import { GetData } from "Component/common/GetData";

import { useParams } from "react-router-dom";
const URL_IMAGE_HD = "https://image.tmdb.org/t/p/original";

const Single = () => {
  const [movieChoosen, setMovieChoosen] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    let isMounted = true;
    GetData(`/movie/${movieId}?`).then((res) => {
      if (isMounted) {
        setMovieChoosen({
          title: res.title,
          backdrop_path: URL_IMAGE_HD + res.backdrop_path,
        });
      }
    });
    return () => { isMounted = false};
  }, [movieId]);

  return (
    <div>
      <div className="single-page-agile-main">
        <div className="container">
          <div className="agileits-single-top">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Single</li>
            </ol>
          </div>
          <div className="single-page-agile-info">
            <div className="show-top-grids-w3lagile">
              <div className="col-sm-8 single-left">
                <MovieInfo movie={movieChoosen} />
                <div className="song-grid-right">
                  <div className="share">
                    <h5>Share this</h5>
                    <div className="single-agile-shar-buttons">
                      <ul>
                        <li>
                          <div
                            className="fb-like"
                            data-href="https://www.facebook.com/w3layouts"
                            data-layout="button_count"
                            data-action="like"
                            data-size="small"
                            data-show-faces="false"
                            data-share="false"
                          ></div>
                        </li>
                        <li>
                          <div
                            className="fb-share-button"
                            data-href="https://www.facebook.com/w3layouts"
                            data-layout="button_count"
                            data-size="small"
                            data-mobile-iframe="true"
                          >
                            <Link
                              className="fb-xfbml-parse-ignore"
                              target="_blank"
                              to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&amp;src=sdkpreparse"
                            >
                              Share
                            </Link>
                          </div>
                        </li>
                        <li className="news-twitter">
                          <Link
                            to="https://twitter.com/w3layouts"
                            className="twitter-follow-button"
                            data-show-count="false"
                          >
                            Follow @w3layouts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://twitter.com/intent/tweet?screen_name=w3layouts"
                            className="twitter-mention-button"
                            data-show-count="false"
                          >
                            Tweet to @w3layouts
                          </Link>
                        </li>
                        <li>
                          <div
                            id="___plusone_0"
                            style={{
                              position: "absolute",
                              width: "450px",
                              left: "-10000px",
                            }}
                          >
                            <iframe
                              title={movieId}
                              ng-non-bindable=""
                              frameBorder="0"
                              hspace="0"
                              marginHeight="0"
                              marginWidth="0"
                              scrolling="no"
                              style={{
                                position: "absolute",
                                top: "-10000px",
                                width: "450px",
                                margin: "0px",
                                borderStyle: "none",
                              }}
                              tabIndex="0"
                              vspace="0"
                              width="100%"
                              id="I0_1608093237712"
                              name="I0_1608093237712"
                              src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&amp;size=medium&amp;origin=file%3A%2F%2F&amp;url=file%3A%2F%2F%2FC%3A%2FUsers%2Ftrinhnhatminh%2FDownloads%2Fdata-html%2Fsingle.html%3F&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.xwJu9mnmcMg.O%2Fam%3DwQE%2Fd%3D1%2Fct%3Dzgms%2Frs%3DAGLTcCPhziFv0ZUgwIM1cgUEDP9FSX8uzg%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1608093237712&amp;_gfid=I0_1608093237712&amp;parent=file%3A%2F%2F&amp;pfname=&amp;rpctoken=29455225"
                              data-gapiattached="true"
                            ></iframe>
                          </div>
                          <div
                            className="g-plusone"
                            data-size="medium"
                            data-gapiscan="true"
                            data-onload="true"
                            data-gapistub="true"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>

                <div className="all-comments">
                  <div className="all-comments-info">
                    <Link to="">Comments</Link>
                    <div className="agile-info-wthree-box">
                      <form>
                        <input type="text" placeholder="Name" required="" />
                        <input type="text" placeholder="Email" required="" />
                        <input type="text" placeholder="Phone" required="" />
                        <textarea placeholder="Message" required=""></textarea>
                        <input type="submit" value="SEND" />
                        <div className="clearfix"> </div>
                      </form>
                    </div>
                  </div>
                  <div className="media-grids">
                    <div className="media">
                      <h5>TOM BROWN</h5>
                      <div className="media-left">
                        <Link to="">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<Link to=""> Admin </Link>
                        </span>
                      </div>
                    </div>
                    <div className="media">
                      <h5>MARK JOHNSON</h5>
                      <div className="media-left">
                        <Link to="">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<Link to=""> Admin </Link>
                        </span>
                      </div>
                    </div>
                    <div className="media">
                      <h5>STEVEN SMITH</h5>
                      <div className="media-left">
                        <Link to="">
                          <img
                            src="images/user.jpg"
                            title="One movies"
                            alt=" "
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <p>
                          Maecenas ultricies rhoncus tincidunt maecenas
                          imperdiet ipsum id ex pretium hendrerit maecenas
                          imperdiet ipsum id ex pretium hendrerit
                        </p>
                        <span>
                          View all posts by :<Link to=""> Admin </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NextMovie />
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
