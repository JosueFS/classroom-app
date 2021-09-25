/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      medium: string;
      light: string;
      defaultColors: {
        black: string;
        white: string;
        gray: string;
        alternative: string;
        selectedAnswer: string;
        wrongAnswer: string;
      };
    };
  }
}
