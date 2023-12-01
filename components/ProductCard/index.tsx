import { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import GlobalContext from "state";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    width: "100%",
  },
  thumbnailContainer: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  thumbnail: {
    maxHeight: 170,
    width: "auto",
    margin: "auto",
  },
  name: {
    fontSize: "1rem",
  },
}));

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  const classes = useStyles();
  const context = useContext(GlobalContext);

  const handleAddToCart = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) => {
    context.actions.addProductToCart(product);
  };

  const isInWishlist: (productId: number) => boolean = (productId: number) => {
    return context.wishlist.some(
      (product: Product) => product.id === productId
    );
  };

  const handleToggleFromWishlist = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product
  ) => {
    if (isInWishlist(product.id)) {
      context.actions.removeProductFromWishlist(product.id);
    } else {
      context.actions.addProductToWishlist(product);
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.thumbnailContainer}>
          <CardMedia
            component="img"
            alt={product.title}
            image={product.image}
            className={classes.thumbnail}
            title="Contemplative Reptile"
          />
        </div>
        <Typography gutterBottom component="h2" className={classes.name}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.desc}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={(e) => handleAddToCart(e, product)}>
          <ShoppingBasketIcon color="secondary" />
        </IconButton>
        <IconButton onClick={(e) => handleToggleFromWishlist(e, product)}>
          {isInWishlist(product.id) ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon color="secondary" />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
