/* 
this file contains middleware functions for reading, writing, 
updating and deleting to local history. the whole module is 
exported as a single object and handles both query history 
and previous saved versions of the imported.js file
*/

const fs = require('fs');
const path = require('path');
import gqlEndpoint from '../relay/gqlEndpoint';

const queryHistoryJSON = require('./queryHistory.json');
const queryHistoryPath = path.resolve('./src/database/queryHistory.json');
let queryHistoryArray = queryHistoryJSON || [];

const importedHistoryJSON = require('./importedHistory.json');
const importedHistoryPath = path.resolve('./src/database/importedHistory.json');
let importedHistoryArray = importedHistoryJSON || [];

const schemaHistoryJSON = require('./schemaHistory.json');
const schemaHistoryPath = path.resolve('./src/database/schemaHistory.json');
const schemaHistoryArray = schemaHistoryJSON || [];

const db = {};

// sets a history item on a local json database equal to the relevant array
db.write = (array, path) => {
    fs.writeFile(path, JSON.stringify(array, null, 2), (err, data) => {
        if (err) console.error(err); 
    });
};

/* function resets the passed-in history array 
to equal the value of imported json history contents 
or, lacking that, an empty array */ 
db.reset = (array, json) => {
    array = json || [];
};

/* add a new query object to the queryHistory.json db and local 
queryHistoryArray. Each object holds the text of the graphQL query, 
a time and date stamp and the graphQL endpoint URL. If the function
finds that the local queryHistoryArray already has an object with that
same queryText, it will remove that element from the array and treat the
newly added element as its replacement. */ 
db.addQuery = (queryText) => {
    const newEntry = {};
    newEntry.queryText = queryText;
    // remove duplicates that match the query text exactly
    const index = queryHistoryArray.findIndex(entry => entry.queryText === newEntry.queryText);
    if (index !== -1) {
        queryHistoryArray.splice(index, 1);
    }
    newEntry.url = gqlEndpoint.url;
    newEntry.timeStamp = new Date().toLocaleTimeString();
    newEntry.dateStamp = new Date().toLocaleDateString();
    queryHistoryArray.unshift(newEntry);
    db.sync(queryHistoryArray, queryHistoryJSON, queryHistoryPath);
}

/* the same as addQuery, but this time for the imported.js query files, 
the function should ideally be called every time a new imported.js 
file is uploaded or changed so that we can keep a history of previous 
imported files. the importedHistory.json objects contain the full file
contents, a user-created name, a time and date stamp and the GQL endpoint */ 
db.addImported = (fileContents, name) => {
    const newEntry = {};
    newEntry.fileContents = fileContents;
    newEntry.name = name;
    newEntry.url = gqlEndpoint.url; 
    const index = queryHistoryArray.findIndex(entry => entry.name === newEntry.name);
    if (index !== -1) {
        importedHistoryArray.splice(index, 1);
    }
    newEntry.timeStamp = new Date().toLocaleTimeString();
    newEntry.dateStamp = new Date().toLocaleDateString();
    importedHistoryArray.unshift(newEntry);
    db.sync(importedHistoryArray, importedHistoryJSON, importedHistoryPath);
}

/* adds a url to the schemaHistory database, which is an object, 
unlike the other json files */
db.addURL = (schemaName) => {
    newEntry = {};
    newEntry.name = schemaName;
    newEntry.url = gqlEndpoint.url;
    newEntry.lastUsed = new Date().toLocaleString();
    schemaHistoryArray.push(newEntry);
    db.sync(schemaHistoryArray, schemaHistoryJSON, schemaHistoryPath)
}

/* writes the passed-in history array to the relevant json file and resets 
the local history array to keep it up to date */
db.sync = (array, json, path) => {
    db.write(array, path);
    db.reset(array, json);
};

// clears the passed-in history permanently
db.clear = (path) => {
    fs.writeFileSync(path, '');
}

// these functions return the relevant history array or object
db.getQueryHistory = () => queryHistoryArray;
db.getImportedHistory = () => importedHistoryArray;
db.getSchemaHistory = () => schemaHistoryArray;

export default db;