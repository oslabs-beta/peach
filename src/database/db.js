/* 
this file contains middleware functions for reading, 
writing, updating and deleting to local history
*/

const fs = require('fs');
const path = require('path');
const queryHistoryJSON = require('./queryHistory.json');
import RelayEnvironment from '../relay/RelayEnvironment';

const pathToDatabase = path.resolve('./src/database/queryHistory.json');
const store = RelayEnvironment.getStore();

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};
let historyArray = queryHistoryJSON || [];

// sets a history item on localStorage equal to the history array
db.write = (newKey, newEntry) => {
    fs.writeFileSync(pathToDatabase, JSON.stringify(historyArray, null, 2));
    window.localStorage.setItem(newKey, newEntry);
};

// set history array to equal the value of localStorage history item
db.reset = () => {
    historyArray = queryHistoryJSON || [];
};

// add the most recent query to the histry and then sync to the database
db.add = () => {
    const data = store._roots.entries().next().value;
    // currently only saves the text of the query entry
    const newEntry = JSON.stringify(data[1].operation.fragment.owner.node.params.text)
        .replace(/\\n/g, '') // remove newlines
        .replace(/\\"/g, '') // remove quotations
        .replace(/\s+/g, ' ') // remove extra spaces
        .slice(25); // remove universal query name
    // key is its universal ID as set by the Relay Store
    const newKey = JSON.stringify(data[0]);
    historyArray.push(newEntry);
    db.sync(newKey, newEntry);
}

// writes history and resets the history variable to keep it up to date
db.sync = (newKey, newEntry) => {
    db.write(newKey, newEntry);
    db.reset();
};

// clears the queryHistory permanently
db.clear = () => {
    fs.writeFileSync(pathToDatabase, '');
}

db.getHistory = () => historyArray;

export default db;