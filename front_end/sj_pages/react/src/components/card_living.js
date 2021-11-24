// import './card.css';
import React, { Component } from 'react';
import {Router, Route, Routes, Link} from 'react-router-dom';


class Living extends Component {
    render() {
        return (
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--beach">
                                    <h2 class="card-front__heading">
                                        생활
                                    </h2>
                                    <p class="card-front__text-price">
                                        검색 포탈 사이트 키워드 통계
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--beach">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/icunow.co.kr/2021/06/14104135/duncan-meyer-xruML_FcCOk-unsplash.jpg" width="100%" height="100%"></img>
                                {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                                </video> */}
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--beach">
                                생활
                            </h3>
                            <p class="inside-page__text">
                               생활 관련 데이터입니다.
                            </p>
                            <a class="inside-page__btn inside-page__btn--beach">
                                <Link to="/living">View data</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Living;