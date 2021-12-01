import React from 'react';
import Table from 'react-bootstrap/Table';

export default function LeisureConvenienceTable() {
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
            <td>-2.1866</td>
            <td>-7.405</td>
            <td>0.000</td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td>0.0005</td>
            <td>0.734</td>
            <td>0.463</td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td>const: 58.4804</td>
            <td>R-squared: 0.122</td>
            <td>F-statistic: 71.39</td>
            <td>Prob: 9.16e-30</td>
            </tr>
        </tbody>
        </Table>
    )
}