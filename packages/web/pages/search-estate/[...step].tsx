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

const searchEstate: NextPage = () => {
  const router = useRouter();
  const { step } = router.query;
  const currentRoute = `${((step || []) as Array<string>).join('/')}`;

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        {ROUTES_CONTENT[currentRoute](ROUTES.ESTATE)}
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
        step: [route],
      },
    })),
  fallback: false,
});

export default withRouter(searchEstate);
