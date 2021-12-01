import React from 'react';
import Table from 'react-bootstrap/Table';

export default function GangnamTable() {
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
            <td>-1.541e+04</td>
            <td>-16.776</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>13.5936</td>
            <td>6.941</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 9.294e+04</td>
            <td>R-squared: 0.284</td>
            <td>F-statistic: 215.5</td>
            <td>Prob: 1.43e-79</td>
            </tr>
        </tbody>
        </Table>
    )
}