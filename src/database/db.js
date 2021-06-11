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
// console.log('Environment', RelayEnvironment);

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};
let historyArray = queryHistoryJSON || [];

// sets a history item on localStorage equal to the history array
db.write = () => {
    fs.writeFileSync(pathToDatabase, JSON.stringify(historyArray, null, 2));
    // window.localStorage.setItem(newKey, newEntry);
};

// set history array to equal the value of localStorage history item
db.reset = () => {
    historyArray = queryHistoryJSON || [];
};

// add the most recent query to the histry and then sync to the database
db.add = () => {
    const data = store._roots.entries().next().value;
    // currently only saves the text of the query entry
    const newEntry = {};
    newEntry.queryText = JSON.stringify(data[1].operation.fragment.owner.node.params.text)
        .replace(/\\n/g, '') // remove newlines
        .replace(/["]+/g, '') // remove quotations
        .replace(/\s+/g, ' ') // remove extra spaces
        // .slice(37); // // remove universal query name
    newEntry.key = JSON.stringify(data[0]); // key is its universal ID as set by the Relay Store
    newEntry.createdAt = new Date().toLocaleString();
    historyArray.unshift(newEntry);
    db.sync();
}

// writes history and resets the history variable to keep it up to date
db.sync = () => {
    db.write();
    db.reset();
};

// clears the queryHistory permanently
db.clear = () => {
    fs.writeFileSync(pathToDatabase, '');
}

db.getHistory = () => historyArray;

export default db;