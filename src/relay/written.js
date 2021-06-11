import graphql from 'graphql';

export default graphql`query writtenQuery 
{ Media (id: 80){
    title {
        english
    }
}}`;