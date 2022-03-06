import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
        primary: string,
        secondary: string,
        ternary: string,
        quartenary: string,
        progressBar: string,
        white: string,
        purple: string,
        mode: string,
        contact: string,
    };
  }
}