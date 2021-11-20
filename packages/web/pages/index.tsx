import React from 'react';
import type { NextPage } from 'next';
import { SiteLayout } from '@components/Layouts';
import { Home } from '@views/Home';

const Index: NextPage = () => {
  return (
    <SiteLayout>
      <Home />
    </SiteLayout>
  );
};

export default Index;
