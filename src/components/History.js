/* 
renders information about query history from the local database
*/

import React, { useState, useEffect } from 'react';
import db from '../database/db.js';

const History = () => {
    const [history, setHistory] = useState(db.getHistory());
    // useEffect(() => {
    //     setHistory(getHistory());
    // }); 
    console.log(history);
    
    return (
        <ul>
            { (history && history.length > 0) && history.map(previousQuery => {
                return <li>{previousQuery.operation.fragment.owner.node.params.text}</li>
            })}
        </ul>
    )
}

export default History;