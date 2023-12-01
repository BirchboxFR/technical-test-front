import Layout from "components/Layout";
import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";
import AboutUs from "components/AboutUs";

const useStyles = makeStyles((theme: Theme) => ({
  container: { marginTop: theme.spacing(5) },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          SuperShop
        </Typography>
        <AboutUs />
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="/shop">
              <Button variant="contained">The shop</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
