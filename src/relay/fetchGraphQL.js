/*
handles the fetch request for connecting to graphql endpoint
*/ 

async function fetchGraphQL (text, variables) {
    // ! currently hard-coded value for graphql endpoint url, needs to update with schema
    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;