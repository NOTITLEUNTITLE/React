// import './card.css';
import React, { Component } from 'react';
import Consum from './Consum';
import {Router, Route, Routes, Link} from 'react-router-dom';



class Culture extends Component {
    render() {
        return (
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--city">

                               <h2 class="card-front__heading">
                                소비
                            </h2>
                            <p class="card-front__text-price">
                                온/오프라인 매출, 패션/잡화
                            </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--city">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                                </video> */}
                                <img src="http://snaptime.edaily.co.kr/wp-content/uploads/2019/03/tid050t003030_l-700x495.jpg" width="100%" height="100%"></img>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--city">
                                소비 데이터
                            </h3>
                            <p class="inside-page__text">
                               소비 관련 데이터입니다.
                            </p>
                                <a class="inside-page__btn inside-page__btn--city">
                                    <Link to="/consum">View data</Link>
                                </a>
                                
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Culture;