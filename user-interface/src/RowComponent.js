import React from 'react';

export default function RowComponent({rowData}){
    return(
        <tr className='tr'>
            <td className='td'>{rowData["Email id"]}</td>
            <td className='td'>{rowData["Company"]}</td>
            <td className='td'><a href={rowData["Website"]} className='a' aria-label='webiste'>{rowData["Website"]}</a></td>
            <td className='td'>{rowData["Position"]}</td>
            <td className='td'>{rowData["Timestamp"]}</td>
        </tr>
    );
}
