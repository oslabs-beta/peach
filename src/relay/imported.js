import graphql from 'graphql';

graphql`query importedLongMediaQuery($id: Int) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
      english
    }
  }
}`;
