// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales
} from '../components/_dashboard/app';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from "./Main.module.css";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="지피지기 홈">
      {/* <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <Logo />
          <RouterLink to="/"><h2>지피지기</h2></RouterLink>
        </Box>
      </Box> */}

      <div className={styles.container}>
        <section className={styles.firstpage123}>
        
          <div className={styles.centertext}>
            <h1 className={styles.fff}><b>지피지기</b></h1>
            <br/>
            <br/>
            <h2>YEARDREAM Project Team No.4</h2>
            <h6>데이터를 통해 더 나은 내일이 되기를 희망합니다.</h6>
          </div>
          <Image src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-down-arrow-icon-png-image_927205.jpg" roundedCircle width="40px" className={styles.scr}/>  
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
      
      <section className={styles.secondpage123}>
        
      {/* <h6>COVID-19와 우리 삶에 대한 데이터를 시각화 및 분석하여 결과를 제공합니다.</h6> */}
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
        {/* <footer>
          <h3 className={styles.secondtext}>COVID-19와 우리 삶에 대한 데이터를 시각화 및 분석하여 결과를 제공합니다</h3>
        </footer> */}
      </section>
    </div>
      
    </Page>
  );
}
