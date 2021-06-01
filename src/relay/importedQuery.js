import graphql from 'graphql';
export default graphql`        query importedQueryQuery ($id: Int) { # Define which variables will be used in the query (id)
            Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                _id: id
                title {
                    romaji
                }
            }
        }`;