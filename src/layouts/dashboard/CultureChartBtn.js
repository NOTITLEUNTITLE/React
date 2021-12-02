import React, { useState, useEffect} from 'react';
import { Button, Tab, Grid, Typography } from '@mui/material';
import MovieChart from '../../components/charts/MovieChart';
import ConcertChart from '../../components/charts/ConcertChart';
import Tabs from 'react-bootstrap/Tabs';

function CultureChartBtn() {
    const [key, setKey] = useState('movie');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="movie" title="영화">
          <br/>
          <MovieChart />
          <Grid style={{textAlign:'right'}}>
            <Typography gutterBottom>
              출처: 영화관입장권통합전산망(<a href="https://www.kobis.or.kr/kobis/business/main/main.do" style={{textDecoration:'none'}}>https://www.kobis.or.kr/kobis/business/main/main.do</a>)
            </Typography>
          </Grid>
        </Tab>
        <Tab eventKey="concert" title="공연">
          <br/>
          <ConcertChart />
          <Grid style={{textAlign:'right'}}>
            <Typography gutterBottom>
              출처: 공연예술통합전산망(<a href="https://www.kopis.or.kr/por/main/main.do" style={{textDecoration:'none'}}>https://www.kopis.or.kr/por/main/main.do</a>)
            </Typography>
          </Grid>
        </Tab>
      </Tabs>
    );
  }
  
export default CultureChartBtn;
