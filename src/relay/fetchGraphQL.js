/*
handles the fetch request for connecting to graphql endpoint
*/ 

import gqlEndpoint from './gqlEndpoint';

async function fetchGraphQL (operation, variables) {
    // ! currently hard-coded value for graphql endpoint url, needs to update with schema
    // I was going to make a conditional here to change the current DB depending on the schema downloaded by the user.
    let currentDB = gqlEndpoint.url;

    // Comented lines below this are my attempt at changing the database Relay works on.
    // let currentSchemaName = localStorage.getItem('schema-name');

    // if (!currentSchemaName) {
        const response = await fetch(currentDB, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: operation,
                // doc_id: operation.id,
                variables,
            }),
        });
     
        return await response.json();
    // } 
    // else if (currentSchemaName === 'Test-DB') {
    //     currentDB = 'https://api.mocki.io/v2/c4d7a195/graphql';
        
    //     const response = await fetch(currentDB, {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query: text,
    //             variables,
    //         }),
    //     });
     
    //     return await response.json();
    // }
    // else if (currentSchemaName === 'United Nations') {
    //     currentDB = 'http://linkedsdg.apps.officialstatistics.org/graphql/linkedsdg.apps.officialstatistics.org/graphql';
        
    //     const response = await fetch(currentDB, {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query: text,
    //             variables,
    //         }),
    //     });
     
    //     return await response.json();
    // }

}

export default fetchGraphQL;