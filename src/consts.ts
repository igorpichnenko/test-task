import { IMask } from 'react-imask';

const DATE_MASK = {
  mask: 'DD/MM/YY',

  blocks: {
    DD: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },

    YY: {
      mask: IMask.MaskedRange,
      from: 11,
      to: 39,
    },
  },
};

export default DATE_MASK;
