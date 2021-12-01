import React from 'react';
import Table from 'react-bootstrap/Table';

export default function TotalAudienceTable() {
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
            <td>-1.57e+05</td>
            <td>-11.776</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>132.9177</td>
            <td>4.004</td>
            <td>0.000</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 4.503e+05</td>
            <td>R-squared: 0.187</td>
            <td>F-statistic:118.8</td>
            <td>Prob: 3.83e-47</td>
            </tr>
        </tbody>
        </Table>
    )
}