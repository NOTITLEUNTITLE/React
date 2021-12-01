import React from 'react';
import Table from 'react-bootstrap/Table';

export default function FashionClothesTable() {
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
            <td>6.5492</td>
            <td>11.644</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0108</td>
            <td>-7.681</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 34.7197</td>
            <td>R-squared: 0.124</td>
            <td>F-statistic: 73.24</td>
            <td>Prob: 1.80e-30</td>
            </tr>
        </tbody>
        </Table>
    )
}