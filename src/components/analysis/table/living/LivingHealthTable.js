import React from 'react';
import Table from 'react-bootstrap/Table';

export default function LivingHealthTable() {
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
            <td>1.1710</td>
            <td>6.620</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0008</td>
            <td>-1.912</td>
            <td>0.056</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 17.3217</td>
            <td>R-squared: 0.074</td>
            <td>F-statistic: 41.03</td>
            <td>Prob: 7.14e-18</td>
            </tr>
        </tbody>
        </Table>
    )
}