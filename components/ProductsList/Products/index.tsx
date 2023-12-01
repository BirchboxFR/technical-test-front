import { Box, Grid, Typography } from "@material-ui/core";
import ProductCard from "components/ProductCard";

const Products: React.FC<{ products: Products }> = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <Box textAlign="center">
          <Typography variant="h5">No products</Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={6} md={4} key={index}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Products;
