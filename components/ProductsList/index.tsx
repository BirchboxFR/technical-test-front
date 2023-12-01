import {
  Container,
  Grid,
  Theme,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Layout from "components/Layout";
import Counter from "./Counter";
import FiltersList from "./FiltersList";
import Products from "./Products";

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginBottom: theme.spacing(3) },
  h1: {
    margin: theme.spacing(5, 0),
  },
  container: {
    columnGap: theme.spacing(2),
    display: "flex",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const ProductList: React.FC<{
  filterListContainer?: string[];
  title: string;
  products: Products;
}> = ({ filterListContainer, title, products }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h3" component="h1" className={classes.h1}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.container}>
          {filterListContainer && <FiltersList data={filterListContainer} />}
          <Grid
            item
            xs={12}
            {...(filterListContainer && {
              md: 9,
            })}
          >
            <Counter />
            <Products products={products} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProductList;
