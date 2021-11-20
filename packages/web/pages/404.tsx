import React from 'react';
import { SiteLayout } from '@components/Layouts';
import { NotFound } from '@views/NotFound';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <SiteLayout>
      <NotFound />
    </SiteLayout>
  );
};

export default Index;
