/* eslint-disable @typescript-eslint/naming-convention */
import Head from 'next/head';

export type THeadParams = {
  canonicalPath?: string;
  description?: string;
  hiddenPage?: boolean;
  keywords?: Array<string>;
  language?: string;
  opengraphImagePath?: string;
  siteName?: string;
  title?: string;
};

const rootDomain = 'https://locadocs.betagouv.fr';
const defaultDescription =
  'Locadocs, localisez simplement vos documents administratifs.';
const defaultLanguage = 'fr-FR';
const defaultTitle =
  'Locadocs, localisez simplement vos documents administratifs.';
const defaultSiteName = 'Locadocs';

export const ApplicationHead = ({
  canonicalPath = '/',
  description = defaultDescription,
  hiddenPage,
  keywords = [],
  language = defaultLanguage,
  opengraphImagePath = '/imgs/home/og-image.jpg',
  siteName = defaultSiteName,
  title = defaultTitle,
}: THeadParams): JSX.Element => (
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" type="image/png" href="/imgs/favicon.png" />
      <link rel="canonical" href={`${rootDomain}${canonicalPath}`} />
      <meta name="robots" content={hiddenPage ? 'none' : 'all'} />
      <meta httpEquiv="content-language" content={language} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={[...keywords].join(', ')} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${rootDomain}${canonicalPath}`} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`${rootDomain}${opengraphImagePath}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${rootDomain}${opengraphImagePath}`}
      />
      <meta property="og:url" content={`${rootDomain}${canonicalPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
    </Head>
  </>
);
