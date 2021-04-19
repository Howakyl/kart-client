import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import  FolderIcon  from '@material-ui/icons/Folder';

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


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ItemList = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} >
      <Typography variant="h6" className={classes.title}>
        All Items
      </Typography>
      <div className={classes.demo}>
        <List >
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
              />
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
            </ListItem>
          )}
        </List>
      </div>
    </Grid>
  );
}

export default ItemList;