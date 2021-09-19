import React from 'react';
import Icon from '@mdi/react';

import { Container } from './ButtonStyles';
import { computeClassnames } from '../../utils/computeClassnames';

export enum EButtonKind {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  kind?: EButtonKind;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  kind = EButtonKind.PRIMARY,
  ...props
}: IButtonProps): JSX.Element => {
  const labelClassName = computeClassnames([
    leftIcon ? 'leftIcon' : '',
    rightIcon ? 'rightIcon' : '',
  ]);
  const computedClassName = computeClassnames([className, kind]);

  return (
    <Container {...props} className={computedClassName}>
      {leftIcon && <Icon path={leftIcon} />}
      <span className={labelClassName}>{label}</span>
      {rightIcon && <Icon path={rightIcon} />}
    </Container>
  );
};
