import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: {
        light: string,
        // medium: string,
        // dark: string,
      }
      black: {
        medium: string,
      }
    }
  }
}
