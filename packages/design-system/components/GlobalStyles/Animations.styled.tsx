import { createGlobalStyle } from 'styled-components';

export const SAnimations = createGlobalStyle`
  @keyframes slideRightAnimateIn {
    0% {
      transform: translateX(3rem);
      opacity: 0;
    }
    75% {
      transform: translateX(-0.5rem);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideLeftAnimateIn {
    0% {
      transform: translateX(-3rem);
      opacity: 0;
    }
    75% {
      transform: translateX(0.5rem);
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideBottomAnimateIn {
    0% {
      transform: translateY(2rem);
      opacity: 0;
    }
    50% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes scaleAnimateIn {
    0% {
      transform: scale(0);
    }
    75% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes opacityAnimateIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
