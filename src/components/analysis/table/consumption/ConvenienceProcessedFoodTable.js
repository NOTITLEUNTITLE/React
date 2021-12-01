import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ConvenienceProcessedFoodTable() {
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
            <td>0.4542</td>
            <td>0.507</td>
            <td>0.616</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0042</td>
            <td>2.103</td>
            <td>0.044</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 3.7513</td>
            <td>R-squared: 0.347</td>
            <td>F-statistic: 7.984</td>
            <td>Prob: 0.00166Prob: 0.00166</td>
            </tr>
        </tbody>
        </Table>
    )
}