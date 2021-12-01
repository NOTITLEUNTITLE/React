import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SSMNonfoodSubtotalTable() {
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
            <td>-5.8006</td>
            <td>-5.226</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0088</td>
            <td>3.556</td>
            <td>0.001</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: -7.3492</td>
            <td>R-squared: 0.482</td>
            <td>F-statistic: 13.97</td>
            <td>Prob: 5.15e-05</td>
            </tr>
        </tbody>
        </Table>
    )
}