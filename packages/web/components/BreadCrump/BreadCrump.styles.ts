import styled from 'styled-components';
import * as COLORS from '@locadocs/design-system/constants/colors';

export const BreadCrumpContainer = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  &::before {
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background-color: #999;
    margin-bottom: 5px;
    position: absolute;
  }

  > span,
  > a {
    font-size: 12px;
    margin: 5px 5px 5px 0;
    display: block;
  }

  > a {
    color: ${COLORS.BLUE_FRANCE};
  }

  > svg {
    display: block;
    width: 1.5rem;
    color: ${COLORS.BLUE_FRANCE};
  }
`;
