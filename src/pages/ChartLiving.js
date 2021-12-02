// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
import LivingAnalysisBtn from '../layouts/dashboard/LivingAnalysisBtn';
import LivingChartBtn from '../layouts/dashboard/LivingChartBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="생활">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            생활
          </Typography>
        </Stack>
          <LivingChartBtn />
        <Grid>
        </Grid>
        <Grid style={{textAlign:'right'}}>
          <Typography gutterBottom>
            출처: 네이버데이터랩(<a href="https://datalab.naver.com/" style={{textDecoration:'none'}}>https://datalab.naver.com/</a>)
          </Typography>
        </Grid>
        <Grid>
          <LivingAnalysisBtn />
        </Grid>
        <br/>
        <Grid>
          <Card>
            <CardHeader title="생활 데이터 최종 분석 인사이트" subheader="생활 데이터 분석을 통해 도출한 인사이트입니다." />
            <br/>
            <CardContent>
              <p>생활의 경우 네이버 상에서의 검색량 변화를 통해 각 항목들에 대한 관심도를 유추하였다.</p>
              <p>분석 결과, 전반적으로 가정과 관련된 항목들의 경우 증가한 것으로 나타났으며, 외출과 관련된 항목들에서는 감소함을 볼 수 있있다.</p>
              <p>증가한 항목으로는 가구, 인테리어(가정용품), 식품 등의 항목이 있었으며, 이는 소비에서 백화점 명품, 가전 및 가정용품의 수요 증가, 가정에서의 식사로 인한 식품 수요 증가 등의 영향인 것으로 유추된다.</p>
              <p>감소한 항목으로는 면세점, 화장품 미용 등 외출과 관련된 항목 등이 있었다. 면세점의 경우 코로나로 인한 항공 이용객 감소에 의한 여파로 추정되며, 화장품, 미용의 경우 외출량 감소 및 마스크 착용으로 인한 수요 감소로 추정된다.</p>
            </CardContent>
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
