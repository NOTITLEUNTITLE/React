// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
import TransportationAnalysisBtn from '../layouts/dashboard/TransportationAnalysisBtn';
import TransportationChartBtn from '../layouts/dashboard/TransportationChartBtn';
// ----------------------------------------------------------------------
import s from "./Main.module.css";
export default function DashboardApp() {
  return (
    <Page title="교통">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            교통
          </Typography>
        </Stack>
          <TransportationChartBtn />
        <Grid>
        </Grid>
        <Grid style={{textAlign:'right'}}>
          <Typography gutterBottom>
            출처: 서울열린데이터광장(<a href="https://data.seoul.go.kr/index.do" style={{textDecoration:'none'}}>https://data.seoul.go.kr/index.do</a>)
          </Typography>
        </Grid>
        {/* <p className={s.source} >출처: 서울열린데이터광장
        <a href="https://data.seoul.go.kr/index.do" className={s.source1}>https://data.seoul.go.kr/index.do</a></p> */}
        <Grid>
          <TransportationAnalysisBtn />
        </Grid>
        <br/>
        <Grid>
          
          <Card>
            <CardHeader title="교통 데이터 최종 분석 인사이트" subheader="교통 데이터 분석을 통해 도출한 인사이트입니다." />
            <br/>
            <CardContent>
              <p>교통의 경우 거리두기 단계와 같은 정책의 영향을 크게 받아 감소한 것으로 나타났다. 코로나로 인한 교통에서의 변화를 보기위해 설명력이 높은 역들을 선별해보았다. 설명계수가 큰 순서의 5개 역은 인천공항1터미널(0.598), 명동(0.559), 인천공항2터미널(0.559), 강변[동서울터미널](0.49), 영등포(0.462)로 인천공항1터미널과 인천공항2터미널의 경우 역이름을 통해 알 수 있듯이 공항역이라는 특징 때문에 코로나로 인한 승하차 인원 수에서의 유의미한 차이를 잘 설명할 수 있었다.</p>
              <p>명동의 경우 외국인 관광객들이 많이 찾는 지역이기 때문에, 영등포의 경우 해당 주변지역의 상권이며, 롯데백화점과 신세계백화점 2개의 대형백화점이 있는 지역이라는 특징 때문에 코로나로 인한 여파가 크며, 잘 설명해주는 것으로 나타난다.</p>
              <p>위의 5개의 역 모두 단계에 대해 하차인원수가 감소함을 보인다.</p>
              <p>단계에 대한 유동인구 수의 감소정도가 가장 큰 순서의 5개 역으로는 강남(-15409), 명동(-9262), 삼성[무역센터](-8256), 을지로입구(-7884), 신림(-7162) 이다. 강남역의 경우 수도권 교통의 요지로 수도권의 거의 모든 지역에서 사람과 차량이 몰리는 핵심 거점 역이며, 상업/교통/업무/교육 등등 모든 분야에서 중심지 역할을 하여 유동인구가 가장 많은 역이기 때문에 단계에서의 영향을 크게 받은 것으로 나타나며, 다른 4개의 역들도 마찬가지로 상업, 업무 분야의 번화가 이기 때문에 동일하게 나타났다.</p>
            </CardContent>
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
