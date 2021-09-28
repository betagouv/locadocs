import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { StaticData } from '@views/StaticData';
import * as React from 'react';
import type { NextPage } from 'next';
import {
  routes,
  GLOBALS,
  ROUTES_CONTENT,
} from 'static-data/static-search-estate';
import * as ROUTES from '@constants/routes';
import { withRouter } from 'next/router';

/**
 * Routing for the intermediary steps will be :
 *
 * For the general case :
 * /search-estate/[step]
 *
 * When the city code hase been pre-selected in the url :
 * /search-estate/code/[inseeCode]/[step]
 *
 * Routing for the endpoint will be :
 *
 * For the general case :
 * /search-estate/[endStep]/[inseeCode]
 *
 * When the city code hase been pre-selected in the url :
 * /search-estate/code/[inseeCode]/[endStep]
 */
const searchEstate: NextPage = () => {
  const { query } = useRouter();
  const currentRoute = `${((query.pathElements || []) as Array<string>).join(
    '/',
  )}`;
  const buildRoute = (
    route: string,
    targetQuery?: Record<string, string>,
  ): string => {
    let result = `${ROUTES.ESTATE}/${route}`;
    const routeQuery = {
      ...query,
      ...targetQuery,
    };
    delete routeQuery.pathElements;
    if (Object.keys(routeQuery).length > 0) {
      result += '?';
      result += Object.entries(routeQuery)
        // .filter(([key]) => key !== 'pathElements')
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    }

    return result;
  };

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {ROUTES_CONTENT[currentRoute](buildRoute)}
      </StaticData>
    </SiteLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.values(routes)
    .filter(route => route !== '/')
    .map(route => ({
      params: {
        pathElements: [route],
      },
    })),
  fallback: false,
});

export default withRouter(searchEstate);
