// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
  AppTasks,
} from '../components/_dashboard/app';

import { BlogPostCard } from '../components/_dashboard/blog'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from "./Main.module.css";
import Cards from "./Cards"

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="홈">
      {/* <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <Logo />
          <RouterLink to="/"><h2>지피지기</h2></RouterLink>
        </Box>
      </Box> */}

      <div className={styles.container}>
        <section className={styles.firstpage123}>
          <div className={styles.img}>
            <h1 className={styles.fff}>First Page</h1>
            <h1>Last Project</h1>
          </div>
        </section>
        
        {/* <section className={styles.secondpage123}>
          <RouterLink to="/dashboard/transportation">
            <button className={styles.button}>교통</button>
          </RouterLink>
          <RouterLink to="/dashboard/consumption">
            <button className={styles.button}>소비</button>
          </RouterLink>
          <RouterLink to="/dashboard/culture">
            <button className={styles.button}>문화</button>
          </RouterLink>
          <RouterLink to="/dashboard/living">
            <button className={styles.button}>생활</button>
          </RouterLink>
        </section> */}


        {/* <section className={styles.secondpage123}>
          <RouterLink to="/dashboard/transportation">
            <Cards />
          </RouterLink>
        </section> */}
      
      <section className={styles.test}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={3}>
            <Link to='/dashboard/transportation' style={{ textDecoration: 'none' }}>
                <AppWeeklySales />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to='/dashboard/culture' style={{ textDecoration: 'none' }}>
              <AppNewUsers />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to='/dashboard/consumption' style={{ textDecoration: 'none' }}>
              <AppItemOrders />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to='/dashboard/living' style={{ textDecoration: 'none' }}>
              <AppBugReports />
            </Link>
          </Grid>
          
        </Grid>
      </section>


    </div>
      
    </Page>
  );
}
