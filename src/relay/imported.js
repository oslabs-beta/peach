import graphql from 'graphql';
export default graphql`query importedQueryQuery($id: Int) {
  Media(id: 80) {
    title {
      english
    }
  }
}
`;