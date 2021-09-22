import type { THeadParams } from '@components/ApplicationHead';
import { ApplicationHead } from '@components/ApplicationHead';
import { WebHeader } from '@components/WebHeader';
import { WebFooter } from '@components/WebFooter';
import React from 'react';

type TParams = {
  children: React.ReactNode;
  headParams?: THeadParams;
};

export const SiteLayout: React.FC<TParams> = ({
  children,
  headParams,
}: TParams): JSX.Element => (
  <React.Fragment>
    <ApplicationHead {...headParams} />
    <WebHeader />
    {children}
    <WebFooter />
  </React.Fragment>
);
