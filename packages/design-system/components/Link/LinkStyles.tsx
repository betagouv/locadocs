import styled from 'styled-components';
import * as COLORS from '../../constants/colors';
import * as SPACINGS from '../../constants/spacings';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACINGS.SPACING_3V} ${SPACINGS.SPACING_6W};
  appearance: none;
  border: none;
  cursor: pointer;
  line-height: ${SPACINGS.SPACING_3W};
  min-height: ${SPACINGS.SPACING_9W};
  width: fit-content;
  text-decoration: none;

  &.primary {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.BLUE_FRANCE};
    border: 1px solid ${COLORS.BLUE_FRANCE};
  }

  &.secondary {
    color: ${COLORS.BLUE_FRANCE};
    border: 1px solid ${COLORS.BLUE_FRANCE};
    background-color: ${COLORS.WHITE};
  }

  &.tertiary {
    color: ${COLORS.BLUE_FRANCE};
    border: 1px solid transparent;
    background: transparent;
  }

  > svg {
    display: block;
    width: ${SPACINGS.SPACING_4W};
  }

  > span {
    display: block;

    &.leftIcon {
      padding-left: ${SPACINGS.SPACING_2W};
    }

    &.rightIcon {
      padding-right: ${SPACINGS.SPACING_2W};
    }
  }
`;
