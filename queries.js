/** @format */

import { gql } from '@apollo/client';

const Character = gql`
  query Character {
    characters {
      results {
        id
        name
        status
      }
    }
  }
`;

export { Character };
