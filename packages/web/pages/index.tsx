import { SiteLayout } from '@components/Layouts';
import { Home } from '@views/Home';
import * as React from 'react';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <SiteLayout>
      <Home />
    </SiteLayout>
  );
};

export default Index;
