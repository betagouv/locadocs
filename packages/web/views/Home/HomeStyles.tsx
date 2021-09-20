import styled from 'styled-components';
import * as BREAKPOINTS from '@locadocs/design-system/constants/breakpoints';
import * as COLORS from '@locadocs/design-system/constants/colors';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';

export const Container = styled.div`
  padding-bottom: ${SPACINGS.SPACING_10W};

  > header {
    > div {
      width: 100%;
      max-width: 110rem;
      margin: 0 auto;
      padding: ${SPACINGS.SPACING_4W};
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (min-width: ${BREAKPOINTS.MD}) {
        flex-wrap: nowrap;
      }

      > div {
        min-width: 40rem;

        > h1 {
          margin-bottom: ${SPACINGS.SPACING_12W};
        }

        > ul {
          margin-left: ${SPACINGS.SPACING_6W};
        }
      }

      > img {
        display: block;
        width: 25rem;
        margin: ${SPACINGS.SPACING_6W} auto;

        @media (min-width: ${BREAKPOINTS.MD}) {
          width: 30rem;
          margin-left: ${SPACINGS.SPACING_8W};
        }
      }
    }
  }

  > section {
    background-color: ${COLORS.BEIGE};
    width: 100%;
    max-width: 110rem;
    margin: ${SPACINGS.SPACING_4W} auto;
    padding: ${SPACINGS.SPACING_4W} ${SPACINGS.SPACING_6W};

    > h2 {
      margin-bottom: ${SPACINGS.SPACING_4W};
    }

    > p {
      margin: ${SPACINGS.SPACING_4W} 0;
    }

    > ul {
      margin: ${SPACINGS.SPACING_4W} 0;
      margin-left: ${SPACINGS.SPACING_6W};
    }
  }
`;
