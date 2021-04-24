import React from 'react';
import { useQuery } from '@apollo/client';
import { } from '../graphql/queries/RenderItems';


const Search = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Search;