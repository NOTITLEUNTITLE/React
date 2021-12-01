import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SSMDailyNecessitiesTable() {
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
            <td>-5.4907</td>
            <td>-5.046</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0071</td>
            <td>2.919</td>
            <td>0.007</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: -9.1004</td>
            <td>R-squared: 0.483</td>
            <td>F-statistic: 13.99</td>
            <td>Prob: 5.09e-05</td>
            </tr>
        </tbody>
        </Table>
    )
}