import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import {
  routes,
  GLOBALS,
  ROUTES_CONTENT,
} from 'static-data/static-search-estate';
import * as ROUTES from '@constants/routes';

const About: NextPage = () => {
  const { query } = useRouter();
  const buildRoute = (route: string): string => {
    let result = `${ROUTES.ESTATE}/${route}`;

    if (query && Object.keys(query).length > 0) {
      result += '?';
      result += Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    }

    return result;
  };

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {ROUTES_CONTENT[routes.ROOT](buildRoute)}
      </StaticData>
    </SiteLayout>
  );
};

export default About;
