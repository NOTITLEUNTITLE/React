import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import ConvenienceTotalTable from '../table/consumption/ConvenienceTotalTable';

export default function ConvenienceTotalAnalysis() {
    const explanation = "유의확률은 0.05 이하(F = 3.589)로 경로 중 한 가지 이상이 유효할 것이라는 것을 확인 할 수 있었다. (VIF는 0.1 이상 10 미만으로 다중공선성이 없는 것으로 확인되었다.) 다음으로 각 경로에 유의성을 확인한 결과 신규확진자(t = 2.152, p<0.05)가 편의점 총계에 미치는 영향이 유효한 것으로 확인되었다. 유의한 변수에 대한 비표준화계수를 확인한 결과 신규확진자(0.0028)는 양수로, 신규확진자가 증가할수록 편의점 총계 성장률이 높아짐을 알 수 있었다. 마지막으로 독립변수에 의해 종속변수가 설명되는 설명력은 19.3%임을 확인할 수 있었다.";

    return (
        <Card>
            <CardHeader title="편의점 총계 데이터 분석 결과" subheader="거리두기 단계와 신규확진자 수가 편의점 총계 성장률에 미치는 영향을 분석하기 위해 다중회귀분석을 실시하였다." />
            <CardContent>
                <CardHeader title="1. 다중회귀 분석 차트" />
                <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPkAHC%2FbtrmJEAQ9K3%2FBuJz4FmI08MzhPCoDNrm4K%2Fimg.png' alt='다중회귀' width='80%' height='auto' />
                <br/>
                <CardHeader title="2. 다중회귀 분석 요약" />
                <ConvenienceTotalTable />
                <br/>
                <CardHeader title="3. 다중회귀 분석 결과 설명" subheader={explanation} />
                <br/>
            </CardContent>
        </Card>
    )
}