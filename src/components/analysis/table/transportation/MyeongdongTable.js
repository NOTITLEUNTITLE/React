import React from 'react';
import Table from 'react-bootstrap/Table';

export default function MyeongdongTable() {
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
            <td>-9262.3812</td>
            <td>-29.547</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>7.8217</td>
            <td>11.703</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 3.329e+04</td>
            <td>R-squared: 0.559</td>
            <td>F-statistic: 689.0</td>
            <td>Prob: 5.40e-194</td>
            </tr>
        </tbody>
        </Table>
    )
}