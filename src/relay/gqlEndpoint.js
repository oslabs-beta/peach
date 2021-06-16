/* 
tiny module handles updating of graphql endpoint url, imported in fetchGraphQL
*/
import schemaHistory from '../database/schemaHistory.json';

const gqlEndpoint = {};
gqlEndpoint.url = schemaHistory[0].url;

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