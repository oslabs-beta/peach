/* 
tiny module handles updating of graphql endpoint url, imported in fetchGraphQL
*/
import schemaHistory from '../database/schemaHistory.json';

const gqlEndpoint = {};
// currently, we are hard-coding an initial grqphql endpoint
gqlEndpoint.url = 'https://graphql.anilist.co';

// accepts a newUrl string to update endpoint, auth defaults to null
gqlEndpoint.setUrl = (newUrl, auth = null) => {
    if (typeof newUrl === 'string') {
        gqlEndpoint.url = newUrl;
    }
    if (auth) {
        gqlEndpoint.requiresAuth = true;
        gqlEndpoint.auth = auth;
    }
    else gqlEndpoint.auth = false;
};
gqlEndpoint.requiresAuth = false;
gqlEndpoint.auth = null;

export default gqlEndpoint;