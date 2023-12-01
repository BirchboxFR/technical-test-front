import { useEffect, useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  Typography,
  Button,
  Grid,
  Card,
  IconButton,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import { useGlobal } from "state";

const useStyles = makeStyles((theme: Theme) => ({
  interstitial: {
    width: 350,
    padding: theme.spacing(2),
  },
  productListContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  productItem: {
    padding: theme.spacing(2),
    position: "relative",
    display: "flex",
  },
  productItemImg: {
    width: 100,
    height: "auto",
    maxHeight: 90,
    marginRight: theme.spacing(2),
  },
  deleteIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
}));

const Interstitial: React.FC = () => {
  const classes = useStyles();
  const context = useGlobal();
  const cart = context.cart;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const handleRemoveProduct: (id: number) => void = (id) => {
    context.actions.removeProductFromCart(id);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((p: { price: number }) => {
      totalPrice += p.price;
    });
    setTotalPrice(totalPrice);
  };

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={context.actions.open_interstitial}
      onClose={() => context.actions.toggleInterstitial()}
      onOpen={() => context.actions.toggleInterstitial()}
    >
      <div className={classes.interstitial}>
        <Grid
          container
          alignItems="center"
          className={classes.productListContainer}
        >
          <Grid item>
            <IconButton onClick={() => context.actions.toggleInterstitial()}>
              <ArrowBackIcon color="secondary" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">Mon panier</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.productListContainer}>
          <Grid item xs={12}>
            <Typography>
              {context.cart.length > 1
                ? `${context.cart.length} produits`
                : `${context.cart.length} produit`}
            </Typography>
          </Grid>
          {cart.map(
            (
              product: {
                id: number;
                title: string;
                price: number;
                image: string;
              },
              index: number
            ): JSX.Element => (
              <Grid item xs={12} key={index}>
                <Card className={classes.productItem}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    image={product.image}
                    title="Contemplative Reptile"
                    className={classes.productItemImg}
                  />
                  <div>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.price}euros</Typography>
                    <IconButton
                      onClick={() => handleRemoveProduct(product.id)}
                      className={classes.deleteIcon}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </div>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        <Typography gutterBottom>
          Prix total : {totalPrice} {totalPrice > 1 ? "euros" : "euro"}
        </Typography>
        <Button color="primary" variant="contained">
          Commander
        </Button>
      </div>
    </SwipeableDrawer>
  );
};

export default Interstitial;
