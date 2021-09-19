import { ApplicationHead } from '@components/ApplicationHead';
import { Home } from '@views/Home';
import { WebFooter } from '@components/WebFooter';
import * as React from 'react';
import type { NextPage } from 'next';
import { WebHeader } from '@components/WebHeader';

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <ApplicationHead />
      <WebHeader />
      <Home />
      <WebFooter />
    </React.Fragment>
  );
};

export default Index;
