import styled from 'styled-components';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';
import * as COLORS from '@locadocs/design-system/constants/colors';
import * as SIZES from '@locadocs/design-system/constants/fontSizes';

export const Container = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: ${SPACINGS.SPACING_6W} ${SPACINGS.SPACING_4W};

  > .baseLine {
    color: ${COLORS.G500};
    font-size: ${SIZES.SIZE_XS};

    &::before {
      display: block;
      content: '';
      height: 1px;
      width: 10rem;
      background-color: ${COLORS.G300};
      margin-bottom: ${SPACINGS.SPACING_1V};
    }
  }

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin: ${SPACINGS.SPACING_6W} 0;
  }

  > p,
  > a,
  > button {
    margin: ${SPACINGS.SPACING_4W} 0;
  }

  a {
    color: ${COLORS.BLUE_FRANCE};
  }

  > .spacer {
    height: ${SPACINGS.SPACING_4W};
  }

  ul {
    padding-left: 4rem;
  }

  > blockquote {
    background-color: ${COLORS.BLUE_FRANCE_100};
    border-left: 4px solid ${COLORS.BLUE_FRANCE_300};
    border-radius: 3px;
    padding: ${SPACINGS.SPACING_3W} ${SPACINGS.SPACING_4W};
  }
`;
