import {style} from '@vanilla-extract/css';

export const appStyle = style({
  padding: '2rem',
  textAlign: 'center'
});

export const logoStyle = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',

  ':hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)'
  }
});

export const iframeStyle = style({
  width: '800px',
  height: '800px',
  border: 'none',
  colorScheme: 'normal'
});
