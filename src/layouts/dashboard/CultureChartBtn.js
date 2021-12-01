import React, { useState, useEffect} from 'react';
import { Button, Tab } from '@mui/material';
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
        </Tab>
        <Tab eventKey="concert" title="공연">
          <br/>
          <ConcertChart />
        </Tab>
      </Tabs>
    );
  }
  
export default CultureChartBtn;
