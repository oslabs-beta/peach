/* module handles aliasing any id fields in a graphql query string as _id */ 

function aliasID(queryString) {
    const idRegex = /(?<!\s_id:?)\sid\s/ig;
    return queryString.replace(idRegex, ' _id: id\n');
}

export default aliasID;