import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import * as React from 'react';
import type { NextPage } from 'next';
import {
  routes,
  GLOBALS,
  ROUTES_CONTENT,
} from 'static-data/static-search-estate';
import * as ROUTES from '@constants/routes';

const About: NextPage = () => {
  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {ROUTES_CONTENT[routes.ROOT](ROUTES.ESTATE)}
      </StaticData>
    </SiteLayout>
  );
};

export default About;
