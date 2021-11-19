import { mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import NextLink from 'next/link';
import React from 'react';
import { BreadCrumpContainer } from './BreadCrump.styles';

interface IBreadCrump {
  steps: Array<{
    href?: string;
    label: string;
  }>;
}

export const BreadCrump: React.FC<IBreadCrump> = ({
  steps,
}: IBreadCrump): JSX.Element => {
  return (
    <BreadCrumpContainer>
      {steps.map(step => {
        if (step.href) {
          return (
            <>
              <NextLink href={step.href} key={step.label}>
                <a href={step.href}>{step.label}</a>
              </NextLink>
              <Icon path={mdiChevronRight} />
            </>
          );
        }
        return <span key={step.label}>{step.label}</span>;
      })}
    </BreadCrumpContainer>
  );
};
