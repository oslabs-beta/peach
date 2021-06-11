import graphql from 'graphql';
export default graphql`{ Media(id: $id, type: ANIME) { _id: id title { english romaji } }}`;