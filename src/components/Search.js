import React, { useState, useEffect } from 'react';
import { RenderItems } from '../graphql/queries/RenderItems';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ShoppingKart from './ShoppingKart';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ selectedItems, setSelectedItems ] = useState([])
  const [ clicked, setClicked ] = useState(false)
  const { loading, error, data } = useQuery(RenderItems);
  const classes = useStyles();

  useEffect(() => {
    console.log('aaa')
    
  }, [clicked])

  if (data) {
    console.log(data)
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }


  const handleAddItem = (value) => {
    const found = selectedItems.some(item => item.name === value.name);
      if (found) {
        console.log('duplicate')
        // value.amount += 1;
        value = {
          name: value.name,
          amount: 2
        }
      } else {
      selectedItems.push({
        name: value.name,
        amount: 1,
        id: value.id
      })
    }

    clicked ? setClicked(false) : setClicked(true);
    setSelectedItems(selectedItems)
  }

  return (
    <div className="search-container">
      <section>
        <div className={classes.root}>
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {/* <Button variant="contained" color="primary" type="submit">Add</Button> */}
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
                <AddBoxIcon 
                  className="add-box-icon"
                  onClick={() => {
                    handleAddItem(val)
                  }}
                ></AddBoxIcon>
              </div>
            )
          })}
      </section>
      <ShoppingKart selectedItems={selectedItems}></ShoppingKart>
    </div>
  )
}

export default Search;