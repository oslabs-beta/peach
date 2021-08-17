/*
sets up the relay environment, tying it to our fetchGraphQL function to reach the endpoint,
generating a new Network and Store for caching and logging our queries to the console
*/

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(params, variables) {
    console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}

// export a singleton instance of relay environment configured with our network function

export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});