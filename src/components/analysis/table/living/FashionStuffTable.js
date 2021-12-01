import React from 'react';
import Table from 'react-bootstrap/Table';

export default function FashionStuffTable() {
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
            <td>-1.1004</td>
            <td>-3.589</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0010</td>
            <td>-1.261</td>
            <td>0.208</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 58.0330</td>
            <td>R-squared: 0.061</td>
            <td>F-statistic:33.68</td>
            <td>Prob: 6.79e-15</td>
            </tr>
        </tbody>
        </Table>
    )
}