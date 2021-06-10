import graphql from 'graphql';
export default graphql`query importedUserQuery {
  User(id: 80) {
    name
  }
}`;