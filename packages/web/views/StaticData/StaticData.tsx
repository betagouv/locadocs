import React from 'react';
import { Container } from './StaticData.styled';

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
