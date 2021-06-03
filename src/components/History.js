/* 
renders information about query history from the local database
*/

import React, { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import db from '../database/db.js';

const History = () => {

    const [history, setHistory] = useState(db.getHistory());

    const options = history.map(previousQuery => {
        return previousQuery.operation.fragment.owner.node.params.text;
    });

    return (
        <Dropdown 
        options={options}
        defaultOption={'History'}
        onSelect={''}
        />
    )
}

export default History;