import { Theme as MuiTheme } from "@material-ui/core/styles";
declare global {
  type Product = {
    id: number;
    title: string;
    desc: string;
    image: string;
    price: string;
  };

  type Products = Product[];

  interface GlobalContextType {
    cart: Product[];
    wishlist: Product[];
  }

  interface CustomColors {
    accent: string;
    light: string;
  }

  type Theme = MuiTheme & { customColors: CustomColors };
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    customColors: CustomColors;
  }
  interface ThemeOptions {
    customColors?: {
      accent?: string;
      light?: string;
    };
  }
}
