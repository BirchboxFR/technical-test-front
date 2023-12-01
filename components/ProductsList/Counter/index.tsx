import { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import GlobalContext from "state";

const useStyles = makeStyles((theme: Theme) => ({
  countContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-start",
    columnGap: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: 14,
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius * 2,
  },
}));

const Counter: React.FC = () => {
  const context = useContext(GlobalContext);
  const classes = useStyles();
  return (
    <Box className={classes.countContainer}>
      <Typography className={classes.title}>
        Products in cart: {context.cart.length}
      </Typography>
      <Typography className={classes.title}>
        Products in wishlist: {context.wishlist.length}
      </Typography>
    </Box>
  );
};

export default Counter;
