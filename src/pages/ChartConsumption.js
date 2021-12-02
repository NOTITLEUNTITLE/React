// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
import ConsumptionAnalysisBtn from '../layouts/dashboard/ConsumptionAnalysisBtn';
import ConsumptionChartBtn from '../layouts/dashboard/ConsumptionChartBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="소비">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            소비
          </Typography>
        </Stack>
          <ConsumptionChartBtn />
        <Grid>
        </Grid>
        <Grid style={{textAlign:'right'}}>
          <Typography gutterBottom>
            출처: 공공데이터포털(<a href="https://www.data.go.kr/" style={{textDecoration:'none'}}>https://www.data.go.kr/</a>)
          </Typography>
        </Grid>
        <Grid>
          <ConsumptionAnalysisBtn />
        </Grid>
        <br/>
        <Grid>
          <Card>
            <CardHeader title="소비 데이터 최종 분석 인사이트" subheader="소비 데이터 분석을 통해 도출한 인사이트입니다." />
            <br/>
            <CardContent>
              <p>코로나로 인해 주요 유통업체들에게 커다란 변화가 생겼다.</p>
              <p>코로나 초기 기업형 수퍼마켓의 경우 대형마트와 편의점 중간 규모의 형태를 띄고 있기 때문에 사람이 많이 밀집하는 대형마트를 가기를 꺼린 소비자들이 상대적으로 규모가 작은 기업형슈퍼마켓을 이용하여 매출이 증가하였다.</p>
              <p>그러나 올해 초부터 소비심리가 다시 살아남에 따라, 소비자들의 발걸음이 다시 대형마트로 향하였고, 최근 근거리, 소량 구매 품목에 대한 소비는 멀리 외출하는 것을 꺼림에 따라, 상대적으로 거주지로부터 가까운 편의점으로 대체되어 상대적으로 설 자리를 잃은 기업형 수퍼마켓의 매출은 작년보다 떨어진 것으로 나타난다.</p>
              <p>백화점의 경우 고급 브랜드의 수요로 인해 코로나 기간 중에도 꾸준한 수요를 보여왔는데, 최근 들어 늘어난 보복심리의 영향으로 더욱 호황인 것으로 나타난다. 나타나는 품목으로는 명품, 의류, 스포츠, 가정용품 등이 있었다.</p>
            </CardContent>
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
