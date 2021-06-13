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
console.log(store);

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};
let historyArray = queryHistoryJSON || [];
console.log('historyArray', historyArray);

// sets a history item on localStorage equal to the history array
db.write = async () => {
    await fs.writeFile(pathToDatabase, JSON.stringify(historyArray, null, 2), (err, data) => {
        if (err) console.error(err);
        console.log(data);
    });
    // window.localStorage.setItem(newKey, newEntry);
};

// set history array to equal the value of localStorage history item
db.reset = () => {
    historyArray = queryHistoryJSON || [];
};

// add the most recent query to the histry and then sync to the database
db.add = async () => {
    debugger;
    const map = await store._roots;
    const lastMapEntry = await [...map][map.size - 1];
    if (lastMapEntry) {
        const newEntry = {};
        newEntry.queryText = await JSON.stringify(lastMapEntry[1].operation.fragment.owner.node.params.text)
            .replace(/\\n/g, '') // remove newlines
            .replace(/["]+/g, '') // remove quotations
            .replace(/\s+/g, ' '); // remove extra spaces
        const index = historyArray.findIndex(entry => entry.queryText === newEntry.queryText);
        /* if we already have that exact same query saved in history...
        delete the existing entry instead of saving a duplicate */ 
        if (index !== -1) {
            historyArray.splice(index, 1);
        }
        newEntry.key = lastMapEntry[0];
        newEntry.value = lastMapEntry[1];
        newEntry.timeStamp = new Date().toLocaleTimeString();
        newEntry.dateStamp = new Date().toLocaleDateString();
        historyArray.unshift(newEntry);
        await db.sync();
    }
};

// writes history and resets the history variable to keep it up to date
db.sync = async () => {
    await db.write();
    await db.reset();
};

// clears the queryHistory permanently
db.clear = () => {
    fs.writeFileSync(pathToDatabase, '');
}

db.getHistory = () => historyArray;

export default db;