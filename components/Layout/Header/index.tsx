import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  makeStyles,
} from "@material-ui/core";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "next/link";
import Interstitial from "components/Layout/Interstitial";
import GlobalContext from "state";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  toolbar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: theme.customColors.light,
  },
  title: {},
  rightContainer: {
    width: "auto",
    marginRight: 0,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const context = useContext(GlobalContext);

  const handleDrawerToggle = (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    const isKeyEvent = event.type === "keydown";
    const isTabOrShift =
      (event as React.KeyboardEvent).key === "Tab" ||
      (event as React.KeyboardEvent).key === "Shift";

    if (!(isKeyEvent && isTabOrShift)) {
      context.actions.toggleInterstitial();
    }
  };

  return (
    <>
      <header className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h4" className={classes.title}>
                <Link href="/">SuperShop</Link>
              </Typography>
              <Container className={classes.rightContainer}>
                <Link href="/wishlist">
                  <IconButton>
                    <FavoriteIcon className={classes.icon} />
                  </IconButton>
                </Link>
                <IconButton
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <ShoppingBasketIcon className={classes.icon} />
                </IconButton>
              </Container>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Interstitial />
    </>
  );
};

export default Header;
