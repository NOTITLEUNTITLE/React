// material
import { Box, Grid, Container, Typography, Link } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
} from '../components/_dashboard/app';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
        <Box sx={{ px: 2.5, py: 3 }}>
            <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
            {/* <Box component={RouterLink} to="/" > */}
            <Logo />
            <Link to="/"><h2>지피지기</h2></Link>
            </Box>
        </Box>
      <Container maxWidth="lg">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={3}>
                <RouterLink to='/dashboard/transportation'>
                    <AppWeeklySales />
                </RouterLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
