import styled from 'styled-components';
import * as BREAKPOINTS from '../../constants/breakpoints';
import * as COLORS from '../../constants/colors';
import * as SIZES from '../../constants/fontSizes';
import * as WEIGHTS from '../../constants/fontWeights';

const shared = `
  font-weight: ${WEIGHTS.BOLD};
  line-height: 1.25;
  color: ${COLORS.G700};
`;

export const H1 = styled.h1`
  ${shared}
  font-size: ${SIZES.SIZE_H2};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H1};
  }
`;

export const H2 = styled.h2`
  ${shared}
  font-size: ${SIZES.SIZE_H3};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H2};
  }
`;

export const H3 = styled.h3`
  ${shared}
  font-size: ${SIZES.SIZE_H4};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H3};
  }
`;

export const H4 = styled.h4`
  ${shared}
  font-size: ${SIZES.SIZE_H5};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H4};
  }
`;

export const H5 = styled.h5`
  ${shared}
  font-size: ${SIZES.SIZE_H6};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H5};
  }
`;

export const H6 = styled.h6`
  ${shared}
  font-size: ${SIZES.SIZE_MEDIUM};

  @media (min-width: ${BREAKPOINTS.SM}) {
    font-size: ${SIZES.SIZE_H6};
  }
`;
