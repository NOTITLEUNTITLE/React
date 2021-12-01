import React, {useState, useEffect} from "react";
import { Button, Tab } from '@mui/material';
import Tabs from 'react-bootstrap/Tabs';
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import Chart from 'react-apexcharts';
import DailyCovidChart from '../components/charts/DailyCovidChart';
import DeathCovidChart from '../components/charts/DeathCovidChart';




function Graph() {
  const [key, setKey] = useState('daily');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="daily" title="일일 확진자">
          <br/>
          <DailyCovidChart />
        </Tab>
        <Tab eventKey="deaths" title="일일 사망자">
          <br/>
          <DeathCovidChart />
        </Tab>
      </Tabs>
    );
  }

export default Graph;
