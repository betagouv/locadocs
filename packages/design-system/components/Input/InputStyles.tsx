import styled from 'styled-components';
import * as COLORS from '../../constants/colors';
import * as SPACINGS from '../../constants/spacings';
import * as SIZES from '../../constants/fontSizes';

export const Container = styled.div`
  padding: ${SPACINGS.SPACING_1W} 0;

  &.success {
    > label {
      color: ${COLORS.SUCCESS};
    }

    > input,
    > textarea {
      border-bottom: 2px solid ${COLORS.SUCCESS};
      &:focus {
        border-bottom: 2px solid ${COLORS.SUCCESS};
      }
    }
  }

  &.error {
    > label {
      color: ${COLORS.ERROR};
    }

    > input,
    > textarea {
      border-bottom: 2px solid ${COLORS.ERROR};
      &:focus {
        border-bottom: 2px solid ${COLORS.ERROR};
      }
    }
  }

  > label {
    display: block;
    margin-bottom: ${SPACINGS.SPACING_1W};

    > span {
      display: block;
      font-size: ${SIZES.SIZE_XS};
    }
  }

  > textarea {
    min-height: 10rem;
  }

  > input,
  > textarea {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${COLORS.G400};
    padding: ${SPACINGS.SPACING_2W} ${SPACINGS.SPACING_4W};
    border-radius: ${SPACINGS.SPACING_1W} ${SPACINGS.SPACING_1W} 0 0;
    background: ${COLORS.G200};

    &:focus {
      border-bottom: 2px solid ${COLORS.G600};
    }
  }

  > .success,
  > .error {
    margin-top: ${SPACINGS.SPACING_1V};
    display: flex;
    align-items: center;
    font-size: ${SIZES.SIZE_XS};

    > svg {
      display: block;
      margin-right: ${SPACINGS.SPACING_1W};
      width: ${SPACINGS.SPACING_3W};
    }
  }

  > .success {
    color: ${COLORS.SUCCESS};
  }

  > .error {
    color: ${COLORS.ERROR};
  }
`;
