import React, { useState } from 'react';
import { RenderItems } from '../graphql/queries/RenderItems';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));


const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const { loading, error, data } = useQuery(RenderItems);
  const classes = useStyles();
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
    <div className={classes.root}>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(event) => {
          setSearchTerm(event.target.value);
          console.log(searchTerm);
        }}
      />
      <Button variant="contained" color="primary" type="submit">Add</Button>
    </div>
  )
}

export default Search;