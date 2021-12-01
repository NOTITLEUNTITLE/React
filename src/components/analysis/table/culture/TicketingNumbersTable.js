import React from 'react';
import Table from 'react-bootstrap/Table';

export default function TicketingNumbersTable() {
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
            <td>-2.104e+05</td>
            <td>-2.172</td>
            <td>0.041</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>3.4242</td>
            <td>0.009</td>
            <td>0.993</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 7.629e+05</td>
            <td>R-squared: 0.314</td>
            <td>F-statistic: 4.814</td>
            <td>Prob: 0.0190</td>
            </tr>
        </tbody>
        </Table>
    )
}