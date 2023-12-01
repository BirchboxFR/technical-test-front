// state.tsx
import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const defaultState = {
  cart: [],
  wishlist: [],
  actions: {
    addProductToCart: (_: Product) => {},
    addProductToWishlist: (_: Product) => {},
    open_interstitial: false,
    removeProductFromCart: (_: number) => {},
    removeProductFromWishlist: (_: number) => {},
    toggleInterstitial: () => {},
  },
};

const GlobalContext = React.createContext(defaultState);

export const useGlobal = () => useContext(GlobalContext);

const useSessionStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Failed to read ${key} from sessionStorage`, error);
    }
  }, [key]);

  const setSessionValue = (newValue: any) => {
    setValue(newValue);
    window.sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setSessionValue];
};

const useArraySessionStorage = (key: string, initialValue: any) => {
  const [array, setArray] = useSessionStorage(key, initialValue);

  const addItem = (item: any) => setArray([...array, item]);
  const removeItem = (id: string) => {
    const index = array.findIndex((p: any) => p.id === id);
    if (index !== -1) {
      setArray([...array.slice(0, index), ...array.slice(index + 1)]);
    }
  };

  return [array, addItem, removeItem];
};

export const GlobalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [open_interstitial, setInterstitial] = useState(false);
  const [cart, addProductToCart, removeProductFromCart] =
    useArraySessionStorage("cart", []);
  const [wishlist, addProductToWishlist, removeProductFromWishlist] =
    useArraySessionStorage("wishlist", []);

  const toggleInterstitial = () => {
    setInterstitial(!open_interstitial);
  };

  return (
    <GlobalContext.Provider
      value={{
        cart,
        wishlist,
        actions: {
          addProductToCart,
          addProductToWishlist,
          open_interstitial,
          removeProductFromCart,
          removeProductFromWishlist,
          toggleInterstitial,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContext;
