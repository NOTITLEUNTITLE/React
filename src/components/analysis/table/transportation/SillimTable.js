import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SillimTable() {
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
            <td>-7162.2440</td>
            <td>-15.280</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>6.8156</td>
            <td>6.820</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 6.327e+04</td>
            <td>R-squared: 0.238</td>
            <td>F-statistic: 169.4</td>
            <td>Prob: 9.14e-65</td>
            </tr>
        </tbody>
        </Table>
    )
}