import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main:  '#000',
    primary: '#1EAAB2',
    secondary: '#fff',
  },
  family: {
    primary: 'Overlock',
    secondary: 'Avenir'
  },
  media: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px'
  }
};

export { myTheme };