import styled from 'styled-components';
import * as COLORS from '@locadocs/design-system/constants/colors';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';

export const Container = styled.form`
  width: calc(100% - ${SPACINGS.SPACING_8W});
  margin: 5rem auto;
  max-width: 40rem;
  padding: ${SPACINGS.SPACING_4W} ${SPACINGS.SPACING_6W};
  background-color: ${COLORS.BEIGE};

  > h1 {
    padding: 0;
    line-height: 1;
  }

  > button {
    width: 100%;
    margin-top: ${SPACINGS.SPACING_2W};
  }

  > .infos {
    padding: ${SPACINGS.SPACING_4W} 0;
  }
`;
