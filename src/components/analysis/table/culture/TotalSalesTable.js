import React from 'react';
import Table from 'react-bootstrap/Table';

export default function TotalSalesTable() {
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
            <td>-1.299e+09</td>
            <td>-11.067</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>1.183e+06</td>
            <td>4.050</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 3.81e+09</td>
            <td>R-squared: 0.163</td>
            <td>F-statistic:100.3</td>
            <td>Prob: 1.56e-40</td>
            </tr>
        </tbody>
        </Table>
    )
}