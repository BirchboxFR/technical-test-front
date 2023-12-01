import { Card, Box, Grid, makeStyles } from "@material-ui/core";

import Items from "./Items";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    borderRadius: theme.spacing(1.25, 2.5, 2.5, 1.25),
    [theme.breakpoints.down("sm")]: {
      borderRadius: theme.spacing(1.25, 1.25, 2.5, 2.5),
    },
  },
  grid: {
    maxWidth: 1200,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    backgroundImage: `image-set(
      url(static/images/components-about-@1x.jpg) 1x,
      url(static/images/components-about-@2x.jpg) 2x
    )`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

const AboutUs: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item md={6}>
          <Box className={classes.image} />
        </Grid>
        <Grid item md={6}>
          <Items />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutUs;
