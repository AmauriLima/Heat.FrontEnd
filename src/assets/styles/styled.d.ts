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
        dark: string,
        medium: string,
        light: string,
      },
      yellow: string,
      pink: string,
      orange: string,
    }
  }
}
