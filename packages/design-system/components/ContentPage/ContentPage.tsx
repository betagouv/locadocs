import React from 'react';

import { Container } from './ContentPageStyles';

export const ContentPage: React.FC = ({ children }): JSX.Element => (
  <Container>{children}</Container>
);
