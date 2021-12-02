// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
// components
import Page from '../components/Page';
import CultureAnalysisBtn from '../layouts/dashboard/CultureAnalysisBtn';
import CultureChartBtn from '../layouts/dashboard/CultureChartBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="문화">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            문화
          </Typography>
        </Stack>
          <CultureChartBtn />
        <Grid>
        </Grid>
        <Grid>
          <CultureAnalysisBtn />
        </Grid>
        <br/>
        <Grid>
          <Card>
            <CardHeader title="문화 데이터 최종 분석 인사이트" subheader="문화 데이터 분석을 통해 도출한 인사이트입니다." />
            <br/>
            <CardContent>
              <p>문화의 경우 공연과 영화데이터를 이용 했으며, 이 둘 모두 거리두기 단계와 같은 정책의 영향을 크게 받아 감소한 것으로 나타났다.</p>
              <p>영화와 공연의 경우 유통과정에서 소비자가 오프라인 접촉을 해야하기 때문에 피해가 크게 나타나고 있다. 전체 관객 수의 경우 20년도 12월 전년 동기대비 93.5%감소(19년도 12월: 22464620명, 20년도 12월: 1438873명)한 것으로 나타났으면 19년도부터 21년도 10월 까지중 가장 높은 수치의 감소율이다.</p>
            </CardContent>
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
