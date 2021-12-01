import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SSMLivingStuffTable() {
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
            <td>-6.4875</td>
            <td>-5.100</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0113</td>
            <td>3.984</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: -4.5714</td>
            <td>R-squared: 0.464</td>
            <td>F-statistic: 13.00</td>
            <td>Prob: 8.57e-05</td>
            </tr>
        </tbody>
        </Table>
    )
}