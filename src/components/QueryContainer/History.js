/* 
renders information about query history from the local database in a 
drop-down menu, indexed by timestamp and query text
*/

import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import db from '../../database/db.js';

const History = ({setQuery}) => {

    const [history, setHistory] = useState(db.getQueryHistory());
    const trimmedHistory = history.map(historyObject => {
        const optionObject = {};
        optionObject.label = historyObject.timeStamp 
                           + '\n'
                           + historyObject.queryText.slice(0, 25) 
                           + '...';
        optionObject.value = historyObject.queryText;
        return optionObject;
    });

    const reloadHistory = (queryText) => {
        setQuery(queryText);
    };

    return (
        <Dropdown 
            placeholder="Query History"
            options={trimmedHistory}
            defaultOption={''}
            onChange={(e) => reloadHistory(e.value)}
        />
    )
}

export default History;