import { useState } from "react";
import ProductsList from "components/ProductsList";
import mockProducts from "./products.mock.json";

const Boutique: React.FC = () => {
  const [products] = useState<Product[]>(mockProducts as unknown as Product[]);
  return (
    <ProductsList
      filterListContainer={["Maquillage", "Soins visage", "Parfums"]}
      title="SuperShop"
      products={products}
    />
  );
};

export default Boutique;
