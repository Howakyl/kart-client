import React from 'react';
import { useQuery } from '@apollo/client';
import { RenderItems } from '../graphql/queries/RenderItems';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    textAlign: 'center'
  },
}));

const ItemList = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(RenderItems);
  if (data) {
    console.log(data)
  }

  function generateItems () {
    return data.items.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.name}/>
        <ListItemIcon>
          <AddBoxIcon 
            className="add-box-icon"
            // color="primary"
          />
        </ListItemIcon>
      </ListItem>
    ))
  }

  if (loading) {
    return <p>Loading.... </p>
  }
  
  if (error) {
    return <p>Error :{error}</p>
  }

  return (
    <Grid item xs={12} md={6} >
      <Typography variant="h6" className={classes.title}>
        All Items
      </Typography>
      <div className={classes.demo}>
        <List>
          {generateItems()}
        </List>
      </div>
    </Grid>
  );
}

export default ItemList;