import React from 'react';

import { Container } from './ContentPage.styled';

export const ContentPage: React.FC = ({ children }): JSX.Element => (
  <Container>{children}</Container>
);
