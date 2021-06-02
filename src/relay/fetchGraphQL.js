async function fetchGraphQL (text, variables) {
    // I was going to make a conditional here to change the current DB depending on the schema downloaded by the user.
    const currentDB = 'https://graphql.anilist.co';

    const response = await fetch(currentDB, {
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