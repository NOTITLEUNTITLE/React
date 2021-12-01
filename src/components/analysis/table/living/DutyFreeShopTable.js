import React from 'react';
import Table from 'react-bootstrap/Table';

export default function DutyFreeShopTable() {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th></th>
            <th>coef</th>
            <th>t</th>
            <th>P&gt;|t|</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>단계</td>
            <td>-3.0766</td>
            <td>-14.854</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0010</td>
            <td>1.914</td>
            <td>0.056</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 12.2103</td>
            <td>R-squared: 0.346</td>
            <td>F-statistic: 273.1</td>
            <td>Prob: 6.61e-96</td>
            </tr>
        </tbody>
        </Table>
    )
}