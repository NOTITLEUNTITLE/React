import React from 'react';
import Table from 'react-bootstrap/Table';

export default function CosmeticsBeautyTable() {
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
            <td>-3.2447</td>
            <td>-8.311</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0063</td>
            <td>6.522</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 5.3727</td>
            <td>R-squared: 0.063</td>
            <td>F-statistic: 34.68</td>
            <td>Prob: 2.66e-15</td>
            </tr>
        </tbody>
        </Table>
    )
}