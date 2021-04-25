import React from 'react';
import { useQuery } from '@apollo/client';


const Search = () => {
  const { loading, error, data } = useQuery(RenderItems)
  if (data) {
    console.log(data)
  }
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Search;