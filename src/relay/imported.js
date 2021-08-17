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
    }
  }
}`;

graphql`query importedThreadQuery {Thread (id: 80){
  title
}}`;




