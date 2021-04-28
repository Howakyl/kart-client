import React from 'react';
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
      <input type="text" placeholder="Search..." />
      <Button variant="contained" color="primary">Add</Button>
    </div>
  )
}

export default Search;