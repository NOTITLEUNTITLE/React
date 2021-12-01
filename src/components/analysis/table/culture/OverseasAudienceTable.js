import React from 'react';
import Table from 'react-bootstrap/Table';

export default function OverseasAudienceTable() {
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
            <td>-7.787e+04</td>
            <td>-9.006</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>75.0077</td>
            <td>3.484</td>
            <td>0.001</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 2.164e+05</td>
            <td>R-squared: 0.111</td>
            <td>F-statistic: 64.11</td>
            <td>Prob: 5.73e-27</td>
            </tr>
        </tbody>
        </Table>
    )
}