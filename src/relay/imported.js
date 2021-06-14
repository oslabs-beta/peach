import graphql from 'graphql';

graphql`query importedMediaQuery {Media (id: 80){
  title {
    english
  }
}}`;

graphql`query importedLongMediaQuery($id: Int) {
  Media(id: $id, type: ANIME) {
    _id: id
    title {
      native
      english
      userPreferred
    }
  }
}`;

graphql`query importedThreadQuery {Thread (id: 80){
  title
}}`;

graphql`query importedUserQuery {User (id: 80) {
  name
}}`;

graphql`query importedCharacterQuery {Character (id: 80) {
  name {
    full
    native
  }
}}`;
