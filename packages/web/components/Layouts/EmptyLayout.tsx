import type { THeadParams } from '@components/ApplicationHead';
import { ApplicationHead } from '@components/ApplicationHead';
import React from 'react';

type TParams = {
  children: React.ReactNode;
  headParams?: THeadParams;
};

export const EmptyLayout: React.FC<TParams> = ({
  children,
  headParams,
}: TParams): JSX.Element => (
  <React.Fragment>
    <ApplicationHead {...headParams} />
    {children}
  </React.Fragment>
);
