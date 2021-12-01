import React from 'react';
import Table from 'react-bootstrap/Table';

export default function MetroTable() {
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
            <td>-8256.3304</td>
            <td>-13.913</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>7.1001</td>
            <td>5.612</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 5.403e+04</td>
            <td>R-squared: 0.217</td>
            <td>F-statistic: 150.9</td>
            <td>Prob: 1.48e-58</td>
            </tr>
        </tbody>
        </Table>
    )
}