import { SiteAlayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import * as React from 'react';
import type { NextPage } from 'next';
import {
  ERoutes,
  GLOBALS,
  ROUTES_CONTENT,
} from 'static-data/static-search-estate';

const About: NextPage = () => {
  return (
    <SiteAlayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {ROUTES_CONTENT[ERoutes.ROOT]}
      </StaticData>
    </SiteAlayout>
  );
};

export default About;
