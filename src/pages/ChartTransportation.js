// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import { Card, CardHeader } from '@mui/material';
// components
import Page from '../components/Page';
import TransportationAnalysisBtn from '../layouts/dashboard/TransportationAnalysisBtn';
import TransportationChartBtn from '../layouts/dashboard/TransportationChartBtn';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            교통
          </Typography>
        </Stack>
          <TransportationChartBtn />
        <Grid item xs={12} md={6} lg={8}>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <TransportationAnalysisBtn />
        </Grid>
        <br/>
        <Grid item xs={12} md={6} lg={8}>
          <Card>
            <CardHeader title="교통 데이터 최종 분석 인사이트" subheader="교통 데이터 최종 분석 인사이트입니다." />
            <br/>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
