/*
handles the fetch request for connecting to the current graphql endpoint
* todo - update to include optional authentication credentials 
*/ 

import gqlEndpoint from './gqlEndpoint';

export default async function fetchGraphQL (operation, variables) {
    let currentDB = gqlEndpoint.url;

        const response = await fetch(currentDB, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: operation,
                variables,
            }),
        });
     
        return await response.json();
}