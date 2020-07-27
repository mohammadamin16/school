import React from 'react';
import './styles.css'
import {Link} from "react-router-dom";

export default function List(props) {

    let rows = [];
    for (let i=0; i < props.data.length; i++){
        rows.push(
            <tr className='row' key={props.data[i]['date']}>
                <td className='cell clickable cell-1'>
                    <Link
                        className=''
                        to={{
                            pathname: "/add_day",
                            state: { items: props.data[i]['items'] }
                        }}
                    >{props.data[i]['date']}</Link>
                </td>
                <td className='cell cell-2'>
                    <p id='total_time'>{props.data[i]['total_time'] + "'"}</p>
                </td>
            </tr>
        )
    }

    return (
        <table className='list'>
            <thead>
                <tr className='row' >
                    <th className='cell cell-1 header-cell'>Date</th>
                    <th className='cell cell-2 header-cell'>Total Time</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}