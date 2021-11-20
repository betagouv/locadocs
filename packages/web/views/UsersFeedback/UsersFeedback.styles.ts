import styled from 'styled-components';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';
import * as COLORS from '@locadocs/design-system/constants/colors';
// import * as SIZES from '@locadocs/design-system/constants/fontSizes';

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: ${SPACINGS.SPACING_6W} ${SPACINGS.SPACING_4W};

  > h1,
  > h2 {
    margin: ${SPACINGS.SPACING_10W} 0;
  }

  > table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-size: 11px;

    > thead {
      > tr {
        > td {
          padding: 0.3rem 1rem;
          color: ${COLORS.WHITE};
          background-color: ${COLORS.BLUE_FRANCE};
        }
      }
    }

    > tbody {
      > tr {
        > td {
          padding: 0.3rem 1rem;
          color: ${COLORS.G700};

          > a {
            color: ${COLORS.BLUE_FRANCE};
          }
        }
      }
    }
  }
`;
