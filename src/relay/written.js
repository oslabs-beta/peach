import graphql from 'graphql';
export default graphql`query importedCharacterQuery {
  Character(id: 80) {
    name {
      full
      native
    }
  }
}
`;