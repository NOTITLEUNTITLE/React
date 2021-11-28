// import './card.css';
import React, { Component } from 'react';
import {Router, Route, Routes, Link} from 'react-router-dom';


class Metro extends Component {
    render() {
        return (
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--camping">
                                    <h2 class="card-front__heading">
                                        교통
                                    </h2>
                                    <p class="card-front__text-price">
                                        서울 지하철, 국내 공항 승객수
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--camping">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                            <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202107/18/632f41b8-4e33-4072-9147-3e072debe771.jpg" width="100%" height="100%"></img>
                                {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4">
                                </video> */}
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--camping">
                                교통
                            </h3>
                            <p class="inside-page__text">
                               교통 관련 데이터입니다.
                            </p>
                            <a class="inside-page__btn inside-page__btn--camping">
                                <Link to="/metro">View data</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Metro;