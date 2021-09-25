import styled from 'styled-components';
import * as BREAKPOINTS from '../../constants/breakpoints';
import * as COLORS from '../../constants/colors';
import * as SPACINGS from '../../constants/spacings';
import * as SIZES from '../../constants/fontSizes';
import * as WEIGHTS from '../../constants/fontWeights';

export const Container = styled.header`
  background-color: ${COLORS.WHITE};
  box-shadow: 0 8px 8px 0 rgb(0 0 0 / 10%), 0 8px 16px -16px rgb(0 0 0 / 32%);
  width: 100%;
  z-index: 9;

  > div {
    width: 100%;
    max-width: 110rem;
    margin: 0 auto;
    padding: ${SPACINGS.SPACING_4W};
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      @media (min-width: ${BREAKPOINTS.MD}) {
        align-items: center;
        flex-direction: row;
      }

      > p {
        pointer-events: none;
        margin-right: ${SPACINGS.SPACING_12W};
        font-size: ${SIZES.SIZE_XS};
        text-transform: uppercase;
        font-weight: ${WEIGHTS.BOLD};
        line-height: 1.1;
        display: block;

        &::before {
          content: '';
          display: block;
          height: 1.4rem;
          width: 3.5rem;
          margin-bottom: ${SPACINGS.SPACING_1W};
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 18'%3E%3Cpath fill='%23fff' d='M11.3 10.2c-.9.6-1.7 1.3-2.3 2.1v-.1c.4-.5.7-1 1-1.5.4-.2.7-.5 1-.8.5-.5 1-1 1.7-1.3.3-.1.5-.1.8 0-.1.1-.2.1-.4.2H13v-.1c-.3.3-.7.5-1 .9-.1.2-.2.6-.7.6 0 .1.1 0 0 0zm1.6 4.6c0-.1-.1 0-.2 0l-.1.1-.1.1-.2.2s.1.1.2 0l.1-.1c.1 0 .2-.1.2-.2.1 0 .1 0 .1-.1 0 .1 0 0 0 0zm-1.6-4.3c.1 0 .2 0 .2-.1s.1-.1.1-.1v-.1c-.2.1-.3.2-.3.3zm2.4 1.9s0-.1 0 0c.1-.1.2-.1.3-.1.7-.1 1.4-.3 2.1-.6-.8-.5-1.7-.9-2.6-1h.1c-.1-.1-.3-.1-.5-.2h.1c-.2-.1-.5-.1-.7-.2.1 0 .2-.2.2-.3h-.1c-.4.2-.6.5-.8.9.2.1.5 0 .7.1h-.3c-.1 0-.2.1-.2.2h.1c-.1 0-.1.1-.2.1.1.1.2 0 .4 0 0 .1.1.1.1.1-.1 0-.2.1-.3.3-.1.2-.2.2-.3.3v.1c-.3.2-.6.5-.9.8v.1c-.1.1-.2.1-.2.2v.1c.4-.1.6-.4 1-.5l.6-.3c.2 0 .3-.1.5-.1v.1h.2c0 .1-.2 0-.1.1s.3.1.4 0c.2-.2.3-.2.4-.2zM12.4 14c-.4.2-.9.2-1.2.4 0 0 0 .1-.1.1 0 0-.1 0-.1.1-.1 0-.1.1-.2.2l-.1.1s0 .1.1 0l.1-.1s-.1.1-.1.2v.3l-.1.1s0 .1-.1.1l-.1.1.2-.2.1-.1h.2s0-.1.1-.1c.1-.1.2-.2.3-.2h.1c.1-.1.3-.1.4-.2.1-.1.2-.2.3-.2.2-.2.5-.3.8-.5-.1 0-.2-.1-.3-.1 0 .1-.2 0-.3 0zM30 9.7c-.1.2-.4.2-.6.3-.2.2 0 .4.1.5.1.3-.2.5-.4.5.1.1.2.1.2.1 0 .2.2.2.1.4s-.5.3-.3.5c.1.2.1.5 0 .7-.1.2-.3.4-.5.5-.2.1-.4.1-.6 0-.1 0-.1-.1-.2-.1-.5-.1-1-.2-1.5-.2-.1 0-.3.1-.4.1-.1.1-.3.2-.4.3l-.1.1c-.1.1-.2.2-.2.3-.1.2-.2.4-.2.6-.2.5-.2 1 0 1.4 0 0 1 .3 1.7.6.2.1.5.2.7.4l1.7 1H13.2l1.6-1c.6-.4 1.3-.7 2-1 .5-.2 1.1-.5 1.5-.9.2-.2.3-.4.5-.5.3-.4.6-.7 1-1l.3-.3s0-.1.1-.1c-.2.1-.2.2-.4.2 0 0-.1 0 0-.1s.2-.2.3-.2v-.1c-.4 0-.7.2-1 .5h-.2c-.5.2-.8.5-1.2.7v-.1c-.2.1-.4.2-.5.2-.2 0-.5.1-.8 0-.4 0-.7.1-1.1.2-.2.1-.4.1-.6.2v.1l-.2.2c-.2.1-.3.2-.5.4l-.5.5h-.1l.1-.1.1-.1c0-.1.1-.1.1-.2.2-.1.3-.3.5-.4 0 0-.1 0 0 0 0 0 0-.1.1-.1l-.1.1c-.1.1-.1.2-.2.2v-.2l.2-.2c.1-.1.2-.1.3-.2h.1c-.2.1-.3.1-.5.2h-.2c0-.1.1-.1.2-.2h.1c1-.8 2.3-.6 3.4-1 .1-.1.2-.1.3-.2.1-.1.3-.2.5-.3.2-.2.4-.4.5-.7v-.1c-.4.4-.8.7-1.3 1-.6.2-1.3.4-2 .4 0-.1.1-.1.1-.1 0-.1.1-.1.1-.2h.1s0-.1.1-.1h.1c-.1-.1-.3.1-.4 0 .1-.1 0-.2.1-.2h.1s0-.1.1-.1c.5-.3.9-.5 1.3-.7-.1 0-.1.1-.2 0 .1 0 0-.1.1-.1.3-.1.6-.3.9-.4-.1 0-.2.1-.3 0 .1 0 .1-.1.2-.1v-.1c0-.1.1 0 .2-.1h-.1c.1-.1.2-.2.4-.2 0-.1-.1 0-.1-.1h.1-.5c-.1 0 0-.1 0-.1.1-.2.2-.5.3-.7h-.1c-.3.3-.8.5-1.2.6h-.2c-.2.1-.4.1-.5 0-.1-.1-.2-.2-.3-.2-.2-.1-.5-.3-.8-.4-.7-.2-1.5-.4-2.3-.3.3-.1.7-.2 1.1-.3.5-.2 1-.3 1.5-.3h-.3c-.4 0-.9.1-1.3.2-.3.1-.6.2-.9.2-.2.1-.3.2-.5.2v-.1c.3-.4.7-.7 1.1-.8.5-.1 1.1 0 1.6.1.4 0 .8.1 1.1.2.1 0 .2.2.3.3.2.1.4 0 .5.1v-.2c.1-.1.3 0 .4 0 .2-.2-.2-.4-.3-.6v-.1c.2.2.5.4.7.6.1.1.5.2.5 0-.2-.3-.4-.6-.7-.9v-.2c-.1 0-.1 0-.1-.1-.1-.1-.1-.2-.1-.3-.1-.2 0-.4-.1-.5-.1-.2-.1-.3-.1-.5-.1-.5-.2-1-.3-1.4-.1-.6.3-1 .6-1.5.2-.4.5-.7.8-1 .1-.4.3-.7.6-1 .3-.3.6-.5.9-.6.3-.1.5-.2.8-.3l2.5-.4H25l1.8.3c.1 0 .2 0 .2.1.1.1.3.2.4.2.2.1.4.3.6.5.1.1.2.3.1.4-.1.1-.1.4-.2.4-.2.1-.4.1-.6.1-.1 0-.2 0-.4-.1.5.2.9.4 1.2.8 0 .1.2.1.3.1v.1c-.1.1-.1.1-.1.2h.1c.1-.1.1-.4.3-.3.2.1.2.3.1.4-.1.1-.2.2-.4.3v.2c.1.1.1.2.2.4s.1.5.2.7c.1.5.2.9.2 1.4 0 .2-.1.5 0 .7l.3.6c.1.2.2.3.3.5.2.3.6.6.4 1zm-15.6 5.2c-.1 0-.1.1-.1.1s.1 0 .1-.1zm5.8-1.8c-.1.1 0 0 0 0zm-6.7-.2c0 .1.1 0 .1 0 .2-.1.5 0 .6-.2-.1-.1-.2 0-.2-.1-.1 0-.2 0-.2.1-.1.1-.3.1-.3.2z'/%3E%3Cpath fill='gray' d='M27.9 6.8c.1 0 .3 0 .3.1-.1.2-.4.3-.6.5h-.1c-.1.1-.1.2-.1.2h-.3c.1.1.3.2.5.2l.1.1h.2V8c-.1.1-.2.1-.4.1.2.1.5.1.7 0 .2-.1 0-.4.1-.5-.1 0 0-.1-.1-.1.1-.1.1-.2.2-.2s.1 0 .2-.1c0-.1-.1-.1-.1-.2.2-.1.3-.3.3-.5 0-.1-.3-.1-.4-.2h-.5c-.2 0-.3.1-.5.1l-.6.3c.2-.1.4-.1.7-.2 0 .3.2.3.4.3'/%3E%3C/svg%3E"),
            linear-gradient(
              90deg,
              ${COLORS.BLUE_FRANCE},
              ${COLORS.BLUE_FRANCE} 50%,
              ${COLORS.RED_MARIANNE} 0,
              ${COLORS.RED_MARIANNE}
            ),
            linear-gradient(90deg, #000, #000);
          background-position: 0 0;
          background-size: 3.5rem;
          background-repeat: no-repeat;
        }

        &::after {
          display: block;
          content: '';
          margin-top: 0.7rem;
          height: 3rem;
          width: 4rem;
          background-size: 8rem;
          background-repeat: no-repeat;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 252 180'%3E%3Cdefs%3E%3Csymbol id='a' viewBox='0 0 11 15.5'%3E%3Cpath d='M10.4 5.3C11.9 1.5 10.1 0 7.9 0 4.2 0 0 6.5 0 11.7c0 2.5 1.2 3.8 3 3.8 2.1 0 4.3-2 6.2-5.5h-1c-1.2 1.5-2.6 2.6-3.9 2.6-1.3 0-2-.8-2-2.6a10.7 10.7 0 01.3-2.2zm-4-3.1c1.1 0 2 .8 1.5 2.6L3.1 6.1c.8-2.2 2.2-4 3.4-4z'/%3E%3C/symbol%3E%3Csymbol id='b' viewBox='0 0 12.4 21.8'%3E%3Cuse width='11' height='15.5' y='6.4' href='%23a'/%3E%3Cpath d='M7.9 4.7L12.4.6V0h-3L6.7 4.7H8z'/%3E%3C/symbol%3E%3Csymbol id='c' viewBox='0 0 11.5 19'%3E%3Cpath d='M1.7 5.7h2.6L.1 17.1a1.3 1.3 0 001.2 2c3 0 6.4-2.6 7.8-6.2h-.7a9.4 9.4 0 01-5.1 3.5L7 5.7h4l.5-1.6H7.7L9 0H7.6L4.9 4.1l-3.2.4v1.2z'/%3E%3C/symbol%3E%3Csymbol id='d' viewBox='0 0 9.8 21.9'%3E%3Cpath d='M7.6 8c.3-1-.4-1.6-1-1.6-2.2 0-5 2.1-6 5h.7A5.6 5.6 0 014.4 9L.1 20.3a1.1 1.1 0 001 1.6c2.2 0 4.7-2 5.8-5H6a5.6 5.6 0 01-3 2.6zM8 3.7a1.8 1.8 0 001.8-1.8A1.8 1.8 0 008 0a1.8 1.8 0 00-1.8 1.8A1.8 1.8 0 008 3.6'/%3E%3C/symbol%3E%3Csymbol id='e' viewBox='0 0 14.8 15.5'%3E%3Cpath d='M3.3 3.1c.7 0 1 1 0 3.4l-3 6.8c-.7 1.3 0 2.2 1.2 2.2a1.3 1.3 0 001.5-1l3-8C7.4 4.8 10 3 11 3s.8.6.3 1.6l-4.6 9a1.3 1.3 0 001.1 1.9c2.3 0 5-2 6-5h-.6A5.6 5.6 0 0110 13l4-8a6.1 6.1 0 00.8-2.8A2 2 0 0012.6 0c-2 0-3.6 2.2-6 5V2.8C6.6 1.4 6.1 0 4.8 0 3.2 0 1.8 2.5.7 4.9h.7c.7-1.1 1.3-1.8 2-1.8'/%3E%3C/symbol%3E%3Csymbol id='f' viewBox='0 0 12 15.5'%3E%3Cpath d='M11.8 3.5c.5-1.9.2-3.5-1.2-3.5-1.8 0-2.3 1.2-4 5V2.8C6.5 1.3 6 0 4.6 0 3.1 0 1.7 2.5.5 5h.8c.7-1.3 1.5-2 2-2 .7 0 1 1 0 3.4l-3 6.8c-.7 1.3 0 2.1 1.2 2.1a1.3 1.3 0 001.5-1l3-8a50.3 50.3 0 012.6-3h3.2z'/%3E%3C/symbol%3E%3Csymbol id='g' viewBox='0 0 14.7 16.2'%3E%3Cpath d='M10.5 13.1c-.6 0-1-1 0-3.4L14.6.1 13.4 0l-1.3 1.3h-.3C6.1 1.3 0 8.6 0 14.2a2 2 0 002.1 2.1c1.7 0 3.3-2.4 5.2-5l-.1 1c-.3 2.6.6 4 2 4 1.5 0 3-2.4 4-4.9h-.7c-.7 1.1-1.5 1.8-2 1.8zM7.9 9.8c-1.3 1.6-3.4 3.5-4.3 3.5-.5 0-.9-.5-.9-1.6 0-3.5 4-8.2 6-8.2a4.2 4.2 0 011.4.2z'/%3E%3C/symbol%3E%3Csymbol id='h' viewBox='0 0 21.9 19.8'%3E%3Cpath d='M11.2 19.8l.3-.9c-3.8-.7-4.3-.7-2.7-4.8l1.4-3.9h3c1.9 0 1.9.9 1.6 3h1l2.6-6.9h-1c-1 1.6-1.8 2.9-3.8 2.9h-3l2-5.6c.8-2 1.1-2.4 3.7-2.4h.7c2.6 0 3 .7 3 3.5h1l.9-4.7H7.3L7 .9c3 .6 3.3.9 2 4.8L5.7 14c-1.5 3.9-2 4.2-5.5 4.8l-.3.9z'/%3E%3C/symbol%3E%3Csymbol id='i' viewBox='0 0 10.1 21.9'%3E%3Cpath d='M2.9 19.4L10.1.3 9.8 0l-5 .6v.6l1 .7c.9.7.6 1.3-.2 3.4L.2 19.9a1.3 1.3 0 001.1 2c2.3 0 4.7-2.1 5.8-5h-.7a6.5 6.5 0 01-3.5 2.5'/%3E%3C/symbol%3E%3Csymbol id='j' viewBox='0 0 18 22'%3E%3Cpath d='M18 .6h-4.3a3.8 3.8 0 00-2.1-.6A6.6 6.6 0 005 6.5a3.3 3.3 0 003 3.6c-1.9.8-3 1.8-3 2.9a1.7 1.7 0 00.9 1.5c-4.3 1.3-6 2.8-6 4.7 0 2 2.6 2.8 5.6 2.8 5.3 0 9.6-2.7 9.6-5.1 0-1.8-1.6-2.5-4.3-3.3-2.2-.7-3.2-.8-3.2-1.6A2.4 2.4 0 019 10.2a6.6 6.6 0 006.1-6.5 4.5 4.5 0 00-.2-1.5h2.5zM9.8 16.2c2.1.7 3 1 3 1.6 0 1.4-2 2.5-5.6 2.5-2.7 0-4-.6-4-2 0-1.5 1.4-2.5 3.5-3.3a21.5 21.5 0 003 1.2zM9 9c-1 0-1.3-.8-1.3-1.7 0-2.8 1.4-6.2 3.5-6.2 1 0 1.3.8 1.3 1.6C12.5 5.6 11.1 9 9 9z'/%3E%3C/symbol%3E%3Csymbol id='k' viewBox='0 0 23 25.1'%3E%3Cpath d='M14.3 15.6c1.9 0 2 .8 1.6 2.8H17l2.5-6.8h-1c-1 1.6-1.7 2.9-3.8 2.9h-4.1l2-5.6c.7-2 1-2.4 3.7-2.4H18c2.6 0 3 .7 3 3.5h1l.9-4.7H7.3l-.3.9c3 .6 3.3.9 2 4.8l-3.2 8.4c-1.5 3.9-2 4.2-5.6 4.8l-.2 1h17.4l3.2-5h-1.2c-2 2-4 3.8-8 3.8-4.7 0-4.3-.3-2.7-4.6l1.4-3.8h4.2zm2.3-11.8L21 .6V0h-3l-2.6 3.9h1.2v-.1z'/%3E%3C/symbol%3E%3Csymbol id='l' viewBox='0 0 13.6 21.8'%3E%3Cpath d='M11.4 6.4c-2 0-4 2.2-5.8 4.8L9.6.3 9.4 0l-5 .6V1l1 .8c.9.7.6 1.3-.2 3.4L.8 16.8A13.9 13.9 0 000 19c0 1.4 1.8 2.7 3.5 2.7 3.8 0 10-6.9 10-12.2 0-2.3-.5-3.2-2.1-3.2zM4.8 19.5c-.8 0-1.9-.7-1.9-1.3a15.5 15.5 0 01.8-2.2L5 12.7C6.3 11 8.4 9.3 9.6 9.3c.7 0 1.2.4 1.2 1.5 0 3.1-2.9 8.7-6 8.7z'/%3E%3C/symbol%3E%3Csymbol id='m' viewBox='0 0 19.2 19.9'%3E%3Cpath d='M17.6 0H7.3L7 .9c3 .6 3.3.9 2 4.8l-3.2 8.5c-1.5 3.9-2 4.2-5.5 4.8L0 20h15.7l3.5-6H18c-2 2-4.2 4.8-7.7 4.8-2.7 0-3-.5-1.6-4.5l3.1-8.5c1.4-3.9 2-4.2 5.5-4.8z'/%3E%3C/symbol%3E%3Csymbol id='n' viewBox='0 0 126 90'%3E%3Cuse width='12.4' height='21.8' x='112.7' y='66.1' href='%23b'/%3E%3Cuse width='11.5' height='19' x='102.2' y='69' href='%23c'/%3E%3Cuse width='9.8' height='21.9' x='93.6' y='66.1' href='%23d'/%3E%3Cuse width='14.8' height='15.5' x='77.2' y='72.5' href='%23e'/%3E%3Cuse width='12' height='15.5' x='65.7' y='72.5' href='%23f'/%3E%3Cuse width='11' height='15.5' x='54.3' y='72.5' href='%23a'/%3E%3Cuse width='11.5' height='19' x='43.7' y='69' href='%23c'/%3E%3Cuse width='14.7' height='16.2' x='28.9' y='71.8' href='%23g'/%3E%3Cuse width='12' height='15.5' x='19.6' y='72.5' href='%23f'/%3E%3Cuse width='21.9' height='19.8' y='67.6' href='%23h'/%3E%3Cuse width='12.4' height='21.8' x='77.3' y='33.1' href='%23b'/%3E%3Cuse width='11.5' height='19' x='66.8' y='36' href='%23c'/%3E%3Cuse width='9.8' height='21.9' x='58.2' y='33' href='%23d'/%3E%3Cuse width='10.1' height='21.9' x='49.4' y='33.1' href='%23i'/%3E%3Cuse width='14.7' height='16.2' x='34.9' y='38.8' href='%23g'/%3E%3Cuse width='18' height='22' x='18.6' y='39.4' href='%23j'/%3E%3Cuse width='23' height='25.1' y='29.3' href='%23k'/%3E%3Cuse width='12.4' height='21.8' x='76.8' y='.1' href='%23b'/%3E%3Cuse width='11.5' height='19' x='66.2' y='2.9' href='%23c'/%3E%3Cuse width='12' height='15.5' x='54.8' y='6.5' href='%23f'/%3E%3Cuse width='11' height='15.5' x='43.4' y='6.4' href='%23a'/%3E%3Cuse width='13.6' height='21.8' x='29.4' y='.1' href='%23l'/%3E%3Cuse width='9.8' height='21.9' x='20.6' href='%23d'/%3E%3Cuse width='19.2' height='19.9' y='1.4' href='%23m'/%3E%3C/symbol%3E%3C/defs%3E%3Cuse fill='%231e1e1e' width='126' height='90' href='%23n'/%3E%3Cuse fill='%23fff' width='126' height='90' x='126' y='90' href='%23n'/%3E%3C/svg%3E");
        }
      }

      > a {
        color: ${COLORS.G700};
        font-weight: ${WEIGHTS.BOLD};
        font-size: ${SIZES.SIZE_H6};
        text-decoration: none;
        padding-top: ${SPACINGS.SPACING_4W};

        @media (min-width: ${BREAKPOINTS.MD}) {
          padding-top: 0;
        }

        > span {
          display: block;
          font-weight: ${WEIGHTS.REGULAR};
          font-size: ${SIZES.SIZE_XS};
        }
      }
    }
  }
`;
