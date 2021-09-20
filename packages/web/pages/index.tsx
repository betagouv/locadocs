import { SiteAlayout } from '@components/Layouts';
import { Home } from '@views/Home';
import * as React from 'react';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <SiteAlayout>
      <Home />
    </SiteAlayout>
  );
};

export default Index;
