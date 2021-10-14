import styled from 'styled-components';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';
import * as COLORS from '@locadocs/design-system/constants/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: ${SPACINGS.SPACING_4W} ${SPACINGS.SPACING_6W};
  margin: ${SPACINGS.SPACING_6W} auto;
  background-color: ${COLORS.BEIGE};

  > p {
    padding: ${SPACINGS.SPACING_4W} 0;
  }

  > .buttonsContainer {
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
`;
