import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation($username: String!, $password: String!) {
    loginAdmin(username: $username, password: $password) {
      value
    }
  }
`;
