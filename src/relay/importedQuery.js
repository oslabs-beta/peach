import graphql from 'graphql';
export default graphql`query importedQueryQuery(
  $id: Int
) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      english
      native
    }
  }
}
`;