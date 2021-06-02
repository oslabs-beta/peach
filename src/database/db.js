/* 
this file contains middleware functions for reading, 
writing, updating and deleting to local history
*/

const fs = require('fs');
const path = require('path');
import RelayEnvironment from '../relay/RelayEnvironment';

let history = [];
let pathToDatabase = path.resolve('./src/database/queryHistory.json');
const store = RelayEnvironment.getStore();

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};

// overwrite the entire JSON file with the current history
db.write = () => {
    fs.writeFileSync(pathToDatabase, JSON.stringify(history, null, 2));
};

// set history variable to the parsed database
db.reset = () => {
    history = JSON.parse(fs.readFileSync(pathToDatabase));
};

// add the most recent query to the histry and then sync to the database
db.add = () => {
    const entry = {};
    const data = store._roots.entries().next().value;
    entry[data[0]] = data[1];
    history.push(data[1]);
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

db.getHistory = () => history;

export default db;