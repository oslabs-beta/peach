/* 
renders information about query history from the local database
*/

import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import db from '../database/db.js';

const History = () => {

    const [history, setHistory] = useState(db.getHistory());
    // formatting for better UI
    const trimmedHistory = history.map(string => string.slice(0, 23) + '...');

    return (
        <Dropdown 
            options={trimmedHistory}
            defaultOption={'History'}
            onSelect={''}
        />
    )
}

export default History;