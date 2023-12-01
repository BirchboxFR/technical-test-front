import { Box, makeStyles } from "@material-ui/core";
import Item from "./Item";

const items = [
  {
    title: "Un accompagnement sur-mesure",
    description: () => (
      <>
        Blissim c’est une box mensuelle sans engagement, mais aussi des offres
        exclusives et un <b>e-shop généreux</b>. Profitez de nos conseils
        personnalisés et de nos vidéos accessibles gratuitement.
      </>
    ),
  },
  {
    title: "10 ans d'expertise beauté",
    description: () => (
      <>
        N°1 de l’abonnement beauté en Europe, Blissim c’est déjà plus de
        <b>250 000 clients</b> déjà conquis.
        <br />
        Label trustpilot
      </>
    ),
  },
  {
    title: "Nos engagements",
    description: () => (
      <>
        Nous travaillons avec des partenaires beauté et des experts toujours
        plus engagés, pour vous proposer une <b>sélection personnalisée</b> de
        soins de qualité et le plus naturels possibles.
      </>
    ),
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: theme.spacing(5),
    padding: theme.spacing(4),
  },
}));

const Items: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {items.map((item, index) => (
        <Item key={index} title={item.title} description={item.description} />
      ))}
    </Box>
  );
};

export default Items;
