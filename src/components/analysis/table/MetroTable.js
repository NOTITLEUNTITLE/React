import React from 'react';
import Table from 'react-bootstrap/Table';

export default function MetroTable() {
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
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td>신규 확진자 수</td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
        <tbody bgcolor='#ffc107'>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
        </Table>
    )
}