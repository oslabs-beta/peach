/* 
this file contains middleware functions for reading, 
writing, updating and deleting to local history
*/

const fs = require('fs');
const path = require('path');
import RelayEnvironment from '../relay/RelayEnvironment';

let history;
let pathToDatabase = path.resolve('./src/database/queryHistory.json');
const store = RelayEnvironment.getStore();

// !NTS: would ideally like to associate queries with their respective APIs
// easiest way might be to pull the url from fetchGraphQL.js
const db = {};

// overwrite the entire JSON file with new data
db.write = () => {
    let data = store._roots.entries().next();
    fs.writeFileSync(pathToDatabase, JSON.stringify(data, null, 2));
};

// set history variable to the parsed database
db.reset = () => {
    history = JSON.parse(fs.readFileSync(pathToDatabase));
};

// writes history and resets the history variable to keep it up to date
db.sync = () => {
    db.write();
    db.reset();
};

export default db;