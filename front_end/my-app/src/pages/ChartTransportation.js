import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppMetro,
  AppApex,
  AppSeoulbus,
} from '../components/_dashboard/app';
import AnalysisBtn from '../layouts/dashboard/AnalysisBtn';
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
        <Grid>
          <AppMetro />
        </Grid>
        <Grid>
          <AppSeoulbus />
        </Grid>
        <Grid>
          <AnalysisBtn />
        </Grid>
      </Container>
    </Page>
  );
}
