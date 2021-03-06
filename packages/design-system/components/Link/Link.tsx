import React from 'react';
import NextLink from 'next/link';
import Icon from '@mdi/react';

import { Container } from './Link.styled';
import { computeClassnames } from '../../utils/computeClassnames';

export enum ELinkKind {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  id?: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  kind?: ELinkKind;
  href: string;
}

export const Link: React.FC<IButtonProps> = ({
  className,
  href,
  label,
  leftIcon,
  rightIcon,
  kind = ELinkKind.PRIMARY,
  ...props
}: IButtonProps): JSX.Element => {
  const labelClassName = computeClassnames([
    leftIcon ? 'leftIcon' : '',
    rightIcon ? 'rightIcon' : '',
  ]);
  const computedClassName = computeClassnames([className, kind]);

  return (
    <NextLink href={href}>
      <Container {...props} className={computedClassName} href={href}>
        {leftIcon && <Icon path={leftIcon} />}
        {label && <span className={labelClassName}>{label}</span>}
        {rightIcon && <Icon path={rightIcon} />}
      </Container>
    </NextLink>
  );
};
