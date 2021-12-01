import React from 'react';
import Table from 'react-bootstrap/Table';

export default function EuljiroTable() {
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
            <td>-7884.5990</td>
            <td>-16.532</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>6.9533</td>
            <td>6.838</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 4.44e+04</td>
            <td>R-squared: 0.278</td>
            <td>F-statistic: 209.4</td>
            <td>Prob: 1.20e-77</td>
            </tr>
        </tbody>
        </Table>
    )
}