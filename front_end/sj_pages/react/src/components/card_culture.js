// import './card.css';
import React, { Component } from 'react';
import {Router, Route, Routes, Link} from 'react-router-dom';


class Consumption extends Component {
    render() {
        return (
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--ski">
                                    <h2 class="card-front__heading">
                                        문화
                                    </h2>
                                    <p class="card-front__text-price">
                                        영화 관람, 공연 관람
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--ski">
                                        View me
                                    </p>
                                </div>
                            </div>

                            <div class="card-back">
                                <img src="https://file.mk.co.kr/meet/neds/2021/08/image_readtop_2021_814414_16297040064760097.jpg" width="100%" height="100%"></img>
                                {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4">
                                </video> */}
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--ski">
                                문화 데이터
                            </h3>
                            <p class="inside-page__text">
                               문화 관련 데이터입니다.
                            </p>
                            <a class="inside-page__btn inside-page__btn--ski">
                                <Link to="/culture">View data</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Consumption;