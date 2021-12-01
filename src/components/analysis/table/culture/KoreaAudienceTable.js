import React from 'react';
import Table from 'react-bootstrap/Table';

export default function KoreaAudienceTable() {
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
            <td>-7.914e+04</td>
            <td>-8.274</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>57.9101</td>
            <td>2.432</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 2.339e+05</td>
            <td>R-squared: 0.110</td>
            <td>F-statistic: 63.52</td>
            <td>Prob: 9.60e-27</td>
            </tr>
        </tbody>
        </Table>
    )
}