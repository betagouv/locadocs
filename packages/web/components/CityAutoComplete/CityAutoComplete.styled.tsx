import styled from 'styled-components';
import * as COLORS from '@locadocs/design-system/constants/colors';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';

export const Container = styled.div`
  > .results {
    background: ${COLORS.G200};
    overflow: auto;
    max-height: 30rem;

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: space-between;
      padding: ${SPACINGS.SPACING_1W} ${SPACINGS.SPACING_4W};
      min-height: ${SPACINGS.SPACING_FINGER};
      border-bottom: 1px solid ${COLORS.G400};
      transition: 200ms ease-out color, 200ms ease-out background-color;

      &:last-of-type {
        border-bottom: none;
      }

      > svg {
        transition: 200ms ease-out fill;
        display: block;
        width: ${SPACINGS.SPACING_4W};
        flex-shrink: 0;
        margin-left: ${SPACINGS.SPACING_4W};
      }

      &:hover {
        color: ${COLORS.WHITE};
        background-color: ${COLORS.BLUE_FRANCE};

        > svg {
          fill: ${COLORS.WHITE};
        }
      }
    }
  }
`;
