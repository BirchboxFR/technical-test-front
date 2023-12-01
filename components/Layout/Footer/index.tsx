import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}SuperSite{new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};

export default Footer;
