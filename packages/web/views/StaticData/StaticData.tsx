import React from 'react';
import { Container } from './StaticDataStyles';

type TParams = {
  children: React.ReactNode;
  baseLine?: string;
};

export const StaticData: React.FC<TParams> = ({
  baseLine,
  children,
}: TParams) => (
  <Container>
    {baseLine && <div className="baseLine">{baseLine}</div>}
    {children}
  </Container>
);
