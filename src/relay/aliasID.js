function aliasID(queryString) {
    const idRegex = /\sid\s/ig;
    return queryString.replace(idRegex, ' _id: id\n');
}

const testQuery = `
query AppQuery($id: Int) { 
    Media (id: $id, type: ANIME) { 
        id
        title {
            romaji
            english
            native
            id
        }
    }
}`;

console.log(aliasID(testQuery));
