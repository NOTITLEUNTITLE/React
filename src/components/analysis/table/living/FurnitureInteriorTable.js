import React from 'react';
import Table from 'react-bootstrap/Table';

export default function FurnitureInteriorTable() {
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
            <td>5.9767</td>
            <td>12.809</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0065</td>
            <td>-5.615</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 54.8158</td>
            <td>R-squared: 0.187</td>
            <td>F-statistic: 119.1</td>
            <td>Prob: 2.96e-47</td>
            </tr>
        </tbody>
        </Table>
    )
}