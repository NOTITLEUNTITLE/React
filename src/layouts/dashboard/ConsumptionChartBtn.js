import React, { useState, useEffect} from 'react';
import { Button, Tab } from '@mui/material';
import Tabs from 'react-bootstrap/Tabs';
import ClothesChart from '../../components/charts/ClothesChart';
import MarketChart from '../../components/charts/MarketChart';
import DepartmentChart from '../../components/charts/DepartmentChart';
import ConvenienceChart from '../../components/charts/ConvenienceChart';
import SSMChart from '../../components/charts/SSMChart';

function ConsumptionChartBtn() {
    const [key, setKey] = useState('clothes');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="clothes" title="의류">
          <br/>
          <ClothesChart />
        </Tab>
        <Tab eventKey="market" title="대형마트">
          <br/>
          <MarketChart />
        </Tab>
        <Tab eventKey="department" title="백화점">
          <br/>
          <DepartmentChart />
        </Tab>
        <Tab eventKey="convenience" title="편의점">
          <br/>
          <ConvenienceChart />
        </Tab>
        <Tab eventKey="ssm" title="기업형 수퍼마켓">
          <br/>
          <SSMChart />
        </Tab>
      </Tabs>
    );
  }
  
export default ConsumptionChartBtn;
