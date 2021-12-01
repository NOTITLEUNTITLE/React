import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ConvenienceTotalTable() {
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
            <td>-0.3864</td>
            <td>-0.667</td>
            <td>0.510</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0028</td>
            <td>2.152</td>
            <td>0.040</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 3.5875</td>
            <td>R-squared: 0.193</td>
            <td>F-statistic: 3.589</td>
            <td>Prob: 0.0401</td>
            </tr>
        </tbody>
        </Table>
    )
}