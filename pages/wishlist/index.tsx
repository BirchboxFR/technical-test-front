import { useContext } from "react";
import GlobalContext from "state";
import ProductsList from "components/ProductsList";

const Wishlist: React.FC = () => {
  const context = useContext(GlobalContext);
  return <ProductsList title="Wishlist" products={context.wishlist} />;
};

export default Wishlist;
