import {keyframes, style} from '@vanilla-extract/css';

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

const reactLogoKeyframes = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});

export const reactLogoStyle = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',

  ':hover': {
    filter: 'drop-shadow(0 0 2em #61dafbaa)'
  },

  animation: `${reactLogoKeyframes} infinite 2s linear`
});

export const formStyle = style({
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '8px'
});

export const inputStyle = style({
  boxSizing: 'border-box',
  height: '32px'
});

export const buttonStyle = style({
  boxSizing: 'border-box',
  height: '32px',

  display: 'flex',
  alignItems: 'center'
});
