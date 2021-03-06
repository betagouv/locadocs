import styled from 'styled-components';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';

export const Container = styled.div`
  padding: ${SPACINGS.SPACING_10W};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
`;
