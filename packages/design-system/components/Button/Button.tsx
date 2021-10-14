import React from 'react';
import Icon from '@mdi/react';

import * as COLORS from '../../constants/colors';
import { Container } from './Button.styled';
import { computeClassnames } from '../../utils/computeClassnames';
import { Loader } from '../Loader';

export enum EButtonKind {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  isLoading?: boolean;
  kind?: EButtonKind;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FC<IButtonProps> = ({
  className,
  isLoading,
  kind = EButtonKind.PRIMARY,
  label,
  leftIcon,
  rightIcon,
  type = 'button',
  ...props
}: IButtonProps): JSX.Element => {
  const labelClassName = computeClassnames([
    leftIcon ? 'leftIcon' : '',
    rightIcon ? 'rightIcon' : '',
  ]);
  const computedClassName = computeClassnames([className, kind]);

  return (
    <Container type={type} {...props} className={computedClassName}>
      {!isLoading && (
        <>
          {leftIcon && <Icon path={leftIcon} />}
          {label && <span className={labelClassName}>{label}</span>}
          {rightIcon && <Icon path={rightIcon} />}
        </>
      )}

      {isLoading && <Loader color={COLORS.WHITE} width={20} />}
    </Container>
  );
};
