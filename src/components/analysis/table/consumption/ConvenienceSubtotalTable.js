import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ConvenienceSubtotalTable() {
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
            <td>-0.0609</td>
            <td>-0.065</td>
            <td>0.948</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0043</td>
            <td>2.049</td>
            <td>0.049</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 3.0533</td>
            <td>R-squared: 0.251</td>
            <td>F-statistic: 5.037</td>
            <td>Prob: 0.0130</td>
            </tr>
        </tbody>
        </Table>
    )
}