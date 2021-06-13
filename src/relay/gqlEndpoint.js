/* 
tiny module handles updating of graphql endpoint url, imported in fetchGraphQL
*/

const gqlEndpoint = {};
gqlEndpoint.url = 'https://graphql.anilist.co';
gqlEndpoint.setUrl = (newUrl, auth) => {
    if (typeof newUrl === 'string') {
        gqlEndpoint.url = newUrl;
    }
    if (auth) {
        gqlEndpoint.requiresAuth = true;
        gqlEndpoint.auth = auth;
    }
};
gqlEndpoint.requiresAuth = false;
gqlEndpoint.auth = null;

export default gqlEndpoint;