import { Box, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    display: "flex",
    columnGap: theme.spacing(3),
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      rowGap: theme.spacing(2),
    },
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

const Item: React.FC<{
  title: string;
  description: () => JSX.Element;
}> = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.item}>
      <Image
        src="/static/images/icon-computer-favorite.svg"
        width={50}
        height={50}
        alt={title}
      />
      <Box>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography>{description()}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
