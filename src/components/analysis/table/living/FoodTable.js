import React from 'react';
import Table from 'react-bootstrap/Table';

export default function FoodTable() {
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
            <td>6.4107</td>
            <td>13.675</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>-0.0061</td>
            <td>-5.193</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 48.3570</td>
            <td>R-squared: 0.225</td>
            <td>F-statistic: 149.6</td>
            <td>Prob: 8.94e-58</td>
            </tr>
        </tbody>
        </Table>
    )
}