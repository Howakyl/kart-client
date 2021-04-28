import React, { useState } from 'react';
import { RenderItems } from '../graphql/queries/RenderItems';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';


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
    <section>
      <div className={classes.root}>
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Button variant="contained" color="primary" type="submit">Add</Button>
      </div>
        {data.items.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, index) => {
          return (
            <div key={index} className="search-list-container">
              <p>{val.name}</p>
              <AddBoxIcon className="add-box-icon"></AddBoxIcon>
            </div>
          )
        })}
    </section>
  )
}

export default Search;