import styled from 'styled-components';
import * as BREAKPOINTS from '@locadocs/design-system/constants/breakpoints';
import * as COLORS from '@locadocs/design-system/constants/colors';
import * as SPACINGS from '@locadocs/design-system/constants/spacings';

export const Container = styled.div`
  > header {
    width: 100%;
    border-bottom: 1px solid #eee;

    > div {
      width: 100%;
      max-width: 110rem;
      margin: 3rem auto;
      padding: ${SPACINGS.SPACING_4W};
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (min-width: ${BREAKPOINTS.MD}) {
        flex-wrap: nowrap;
      }

      > div {
        > h1 {
          font-size: 3.6rem;
          margin-bottom: ${SPACINGS.SPACING_12W};
          max-width: 57rem;
        }

        > ul {
          margin-left: ${SPACINGS.SPACING_6W};
        }
      }

      > img {
        display: block;
        max-width: 50rem;
        width: 100%;
        height: auto;
        margin: ${SPACINGS.SPACING_6W} auto;

        @media (min-width: ${BREAKPOINTS.MD}) {
          margin-left: ${SPACINGS.SPACING_8W};
        }
      }
    }
  }

  > .info {
    display: flex;
    width: 100%;
    max-width: 80rem;
    margin: 5rem auto;
    padding: ${SPACINGS.SPACING_4W};
    flex-direction: column;

    > div:first-of-type {
      flex-shrink: 0;
      padding-right: 5rem;
      width: 30rem;

      > span {
        display: block;
        font-size: 3rem;
        line-height: 3.4rem;
        font-weight: 600;

        &:last-of-type {
          color: ${COLORS.BLUE_FRANCE_300};
        }
      }

      &::after {
        display: block;
        content: '';
        height: 2px;
        width: 10rem;
        background-color: ${COLORS.BLUE_FRANCE_300};
        margin-top: 3rem;
      }
    }

    > div:last-of-type {
      line-height: 2.5rem;

      > ul {
        padding: 1rem 0 1rem 2rem;

        > li {
          margin: 0.5rem 0;
        }
      }
    }

    @media (min-width: ${BREAKPOINTS.MD}) {
      flex-direction: row;
    }
  }

  > .bulletPoints {
    background-color: ${COLORS.BLUE_FRANCE_200};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 10rem 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5rem;

      > span {
        display: block;
        font-size: 4rem;
        text-align: center;
      }

      > p {
        max-width: 20rem;
        text-align: center;
      }
    }
  }

  > .genericQuestions {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 94rem;
    margin: 10rem auto;
    padding: 0 2rem;
    flex-wrap: wrap;

    > img {
      display: block;
      max-width: 45rem;
      width: 100%;
      height: auto;
    }

    > p {
      font-weight: 600;
      max-width: 45rem;
      width: 100%;
      font-size: 2.8rem;
    }
  }

  > .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15rem 0;
  }

  > .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    background-color: ${COLORS.BLUE_FRANCE_600};
    color: ${COLORS.WHITE};
  }
`;
