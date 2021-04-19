import { gql } from '@apollo/client';

export const RenderItems = gql`
  query items {
    items {
      name
      id
    }
  }
`