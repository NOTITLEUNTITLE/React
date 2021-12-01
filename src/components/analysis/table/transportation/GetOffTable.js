import React from 'react';
import Table from 'react-bootstrap/Table';

export default function GetOffTable() {
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
            <td>-7.249e+05</td>
            <td>-10.427</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>500.0770</td>
            <td>2.889</td>
            <td>0.004</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 6.749e+06</td>
            <td>R-squared: 0.168</td>
            <td>F-statistic: 103.9</td>
            <td>Prob: 7.74e-42</td>
            </tr>
        </tbody>
        </Table>
    )
}