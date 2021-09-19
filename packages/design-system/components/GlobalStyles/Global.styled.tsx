import { createGlobalStyle } from 'styled-components';
import * as WEIGHTS from '../../constants/fontWeights';
import * as SIZES from '../../constants/fontSizes';

export const SGlobals = createGlobalStyle`

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.THIN};
    src: url(/fonts/Marianne-Thin_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.THIN};
    src: url(/fonts/Marianne-Thin.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.LIGHT};
    src: url(/fonts/Marianne-Light_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.LIGHT};
    src: url(/fonts/Marianne-Light.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.REGULAR};
    src: url(/fonts/Marianne-Regular_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.REGULAR};
    src: url(/fonts/Marianne-Regular.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.MEDIUM};
    src: url(/fonts/Marianne-Medium_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.MEDIUM};
    src: url(/fonts/Marianne-Medium.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.BOLD};
    src: url(/fonts/Marianne-Bold_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.BOLD};
    src: url(/fonts/Marianne-Bold.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'italic';
    font-weight: ${WEIGHTS.EXTRA_BOLD};
    src: url(/fonts/Marianne-ExtraBold_Italic.woff2) format('woff2')
  }

  @font-face{
    font-family: 'Marianne';
    font-style: 'normal';
    font-weight: ${WEIGHTS.EXTRA_BOLD};
    src: url(/fonts/Marianne-ExtraBold.woff2) format('woff2')
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;
    vertical-align: baseline;
    user-select: auto;
    color: inherit;
    touch-action: manipulation;

    &:focus {
      outline: none;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: ${SIZES.SIZE_NORMAL};
    line-height: 1.5;
    font-family: Marianne, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow: auto;
  }

  a,
  button {
    cursor: pointer;
    touch-action: manipulation;
  }

  input {
    user-select: initial;
    touch-action: manipulation;
  }

  b {
    font-weight: ${WEIGHTS.BOLD};
  }

  i {
    font-style: italic;
  }

  .strong,
  strong {
    font-weight: ${WEIGHTS.BOLD};
  }

  .small {
    font-size: var(--typography-size-f1);
  }

  .caption {
    font-size: var(--typography-size-f0);
  }

  em {
    font-style: italic;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
