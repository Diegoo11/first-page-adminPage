import { gql } from '@apollo/client';

export const QUERY_STATIC_IMAGE = gql`
query findById($ID: ID!) {
  findSingleImage(id: $ID) {
    src
    alt
    link
    id
  }
}
`;

export const QUERY_MODULE = gql`
  query($id: String!){
    findForModule(id: $id) {
      image {
        id
        src
        alt
      }
      text {
        name
        id
        description
      }
    }
  }
`;

export const hola = () => console.log('hola');
