import styled from 'styled-components';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';
import * as COLORS from '@locadocs/design-system/constants/colors';

export const Container = styled.div`
  > div {
    width: 100%;
    max-width: 110rem;
    padding: ${SPACINGS.SPACING_4W} ${SPACINGS.SPACING_6W};
    margin: ${SPACINGS.SPACING_6W} auto;
    background-color: ${COLORS.BEIGE};

    &.nps {
      > p {
        text-align: center;
        font-weight: bold;
        color: ${COLORS.SUCCESS};
      }

      > div {
        width: 55rem;
        margin: 0 auto;

        > div:first-of-type {
          padding-top: ${SPACINGS.SPACING_4W};
          padding-bottom: ${SPACINGS.SPACING_2W};
          display: flex;
          align-items: center;
          justify-content: space-between;

          > span {
            display: block;
          }
        }

        > div:last-of-type {
          width: 100%;
          display: flex;
          align-items: center;
          padding-bottom: ${SPACINGS.SPACING_4W};

          > button {
            flex-grow: 1;
            height: ${SPACINGS.SPACING_FINGER};
            color: ${COLORS.WHITE};
            background-color: ${COLORS.BLUE_DARK};
            margin: 1px;
          }
        }
      }
    }

    &.satisfaction {
      > p {
        text-align: center;
        font-weight: bold;
        color: ${COLORS.SUCCESS};
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${SPACINGS.SPACING_4W} 0;

        > button {
          padding: ${SPACINGS.SPACING_2W};
          display: flex;
          align-items: center;
          justify-content: center;

          > svg {
            display: block;
            width: ${SPACINGS.SPACING_10W};
          }
        }
      }
    }
  }
`;
