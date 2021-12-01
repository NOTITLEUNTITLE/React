import React, { useState, useEffect} from 'react';
import { Button, Tab } from '@mui/material';
import Tabs from 'react-bootstrap/Tabs';
import SearchChart from '../../components/charts/SearchChart';

function LivingChartBtn() {
    const [key, setKey] = useState('search');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="search" title="검색어 키워드">
          <br/>
          <SearchChart />
        </Tab>
      </Tabs>
    );
  }
  
export default LivingChartBtn;
