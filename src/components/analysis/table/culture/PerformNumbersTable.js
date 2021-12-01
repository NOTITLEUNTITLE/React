import React from 'react';
import Table from 'react-bootstrap/Table';

export default function PerformNumbersTable() {
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
            <td>-1555.8085</td>
            <td>-2.311</td>
            <td>0.031</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.2142</td>
            <td>-0.081</td>
            <td>0.936</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 7145.7066</td>
            <td>R-squared: 0.354</td>
            <td>F-statistic:5.763</td>
            <td>Prob: 0.0101</td>
            </tr>
        </tbody>
        </Table>
    )
}