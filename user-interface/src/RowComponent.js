import React from 'react';

export default function RowComponent({rowData}){
    return(
        <tr className='tr'>
            <td className='td'>{rowData["emailId"]}</td>
            <td className='td'>{rowData["companyName"]}</td>
            <td className='td'><a href={rowData["jobUrl"]} className='a' aria-label='webiste'>{rowData["jobUrl"]}</a></td>
            <td className='td'>{rowData["jobTitle"]}</td>
            <td className='td'>{rowData["createdDate"]}</td>
        </tr>
    );
}
