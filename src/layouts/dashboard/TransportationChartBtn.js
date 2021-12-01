import React, { useState, useEffect} from 'react';
import { Button, Tab } from '@mui/material';
import Tabs from 'react-bootstrap/Tabs';
import MetroChart from '../../components/charts/MetroChart';

function TransportationChartBtn() {
    const [key, setKey] = useState('metro');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="metro" title="지하철">
          <br/>
          <MetroChart />
        </Tab>
      </Tabs>
    );
  }
  
export default TransportationChartBtn;
