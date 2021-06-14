/* 
this file contains middleware functions for reading, 
writing, updating and deleting to local history
*/
const fs = require('fs');
const path = require('path');
const queryHistoryJSON = require('./queryHistory.json');
const importedHistoryJSON = require('./importedHistory.json');
const importedHistoryPath = path.resolve('./src/database/importedHistory.json')
const queryHistoryPath = path.resolve('./src/database/queryHistory.json');

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};
let queryHistoryArray = queryHistoryJSON || [];
let importedHistoryArray = importedHistoryJSON || [];

// sets a history item on localStorage equal to the history array
db.write = () => {
    fs.writeFile(queryHistoryPath, JSON.stringify(queryHistoryArray, null, 2), (err, data) => {
        if (err) console.error(err); 
    });
    // window.localStorage.setItem(newKey, newEntry);
};

// set history array to equal the value of localStorage history item
db.reset = () => {
    queryHistoryArray = queryHistoryJSON || [];
};

db.addQuery = (queryText) => {
    const newEntry = {};
    newEntry.queryText = queryText;
    // remove duplicates that match the query text exactly
    const index = queryHistoryArray.findIndex(entry => entry.queryText === newEntry.queryText);
    if (index !== -1) {
        queryHistoryArray.splice(index, 1);
    }
    newEntry.timeStamp = new Date().toLocaleTimeString();
    newEntry.dateStamp = new Date().toLocaleDateString();
    queryHistoryArray.unshift(newEntry);
    db.sync();
}

db.addImported = (importedString) => {

}

// writes history and resets the history variable to keep it up to date
db.sync = () => {
    db.write();
    db.reset();
};

// clears the queryHistory permanently
db.clear = () => {
    fs.writeFileSync(queryHistoryPath, '');
}

db.getHistory = () => queryHistoryArray;

export default db;