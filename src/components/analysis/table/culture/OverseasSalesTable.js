import React from 'react';
import Table from 'react-bootstrap/Table';

export default function OverseasSalesTable() {
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
            <td>-6.496e+08</td>
            <td>-8.557</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>6.693e+05</td>
            <td>3.542</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 1.844e+09</td>
            <td>R-squared: 0.097</td>
            <td>F-statistic: 55.31</td>
            <td>Prob: 1.51e-23</td>
            </tr>
        </tbody>
        </Table>
    )
}