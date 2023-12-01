import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  item: {
    paddingLeft: 0,
  },
  container: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
}));

const FiltersList: React.FC<{
  data: string[];
}> = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3}>
      <Typography variant="h6" className={classes.title}>
        Catégories
      </Typography>
      <div className={classes.container}>
        <List>
          {data.map((filter, index) => (
            <ListItem className={classes.item} key={index}>
              <ListItemText primary={filter} />
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
};

export default FiltersList;
