import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
}));

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
