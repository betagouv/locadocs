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
            <React.Fragment key={step.label}>
              <NextLink href={step.href}>
                <a href={step.href}>{step.label}</a>
              </NextLink>
              <Icon path={mdiChevronRight} />
            </React.Fragment>
          );
        }
        return <span key={step.label}>{step.label}</span>;
      })}
    </BreadCrumpContainer>
  );
};
