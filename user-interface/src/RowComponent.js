import React from 'react';

export default function RowComponent({rowData}){
    return(
        <tr>
            <td>{rowData.key1}</td>
            <td>{rowData.key2}</td>
            <td>{rowData.key3}</td>
            <td>{rowData.key4}</td>
            <td>{rowData.key5}</td>
        </tr>
    );
}
