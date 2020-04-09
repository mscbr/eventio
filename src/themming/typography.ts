import { pxToRem } from 'shared/helpers';

const typography = {
  fontFamily: {
    hind: '"Hind", sans-serif',
    playfairDisplay: '"Playfair Display", serif',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    black: '900',
  },
  fontSize: {
    18: pxToRem(18),
    16: pxToRem(16),
  },
  letterSpacing: {
    1: pxToRem(1),
  },
};
export default typography;
