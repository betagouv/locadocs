import React from 'react';
import type { NextPage } from 'next';
import { ApplicationHead } from '@components/ApplicationHead';
import { WebFooter } from '@components/WebFooter';
import { Login } from '@views/Login';
import { WebHeader } from '@components/WebHeader';

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <ApplicationHead />
      <WebHeader />

      <Login />

      <WebFooter />
    </React.Fragment>
  );
};

export default Index;
