import graphql from 'graphql';
export default graphql`query writtenQuery(
  $id: Int
) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
      english
      romaji
    }
  }
}
`;
