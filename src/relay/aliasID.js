function aliasID(queryString) {
    const idRegex = /\sid\s/ig;
    return queryString.replace(idRegex, ' _id: id\n');
}

export default aliasID;