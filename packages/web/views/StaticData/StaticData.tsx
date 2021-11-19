import { useRouter } from 'next/router';
import React from 'react';
import { Container } from './StaticData.styled';

type TParams = {
  children: React.ReactNode;
  baseLine?: string;
};

export const StaticData: React.FC<TParams> = ({
  baseLine,
  children,
}: TParams) => {
  const { query } = useRouter();

  return (
    <Container>
      {query.embed && baseLine && <div className="baseLine">{baseLine}</div>}
      {children}
    </Container>
  );
};
