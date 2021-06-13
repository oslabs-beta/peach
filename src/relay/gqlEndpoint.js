/* 
tiny module handles updating of graphql endpoint url, imported in fetchGraphQL
*/

const gqlEndpoint = {};
gqlEndpoint.url = 'https://graphql.anilist.co';
gqlEndpoint.setUrl = (newUrl) => {
    if (typeof newUrl === 'string') {
        gqlEndpoint.url = newUrl;
    }
};

export default gqlEndpoint;