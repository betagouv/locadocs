import React from 'react';
import * as COLORS from '../../constants/colors';
import { SContainer } from './Loader.styled';

export interface ILoaderProps {
  readonly className?: string;
  readonly color?: string;
  readonly label?: string;
  readonly labelSize?: number;
  readonly style?: React.CSSProperties;
  readonly width?: number;
}

const LoaderComponent: React.FC<ILoaderProps> = ({
  className = undefined,
  color = COLORS.BLUE_FRANCE,
  label,
  labelSize = 12,
  style = {},
  width,
}: ILoaderProps) => {
  return (
    <SContainer className={className} style={style}>
      <svg
        height={`${width || '40'}px`}
        viewBox="0 0 50 50"
        width={`${width || '40'}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {label && <p style={{ color, fontSize: `${labelSize}px` }}>{label}</p>}
    </SContainer>
  );
};

export const Loader = React.memo(LoaderComponent);
