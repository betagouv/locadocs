/* eslint-disable @typescript-eslint/naming-convention */
import type { NextApiRequest, NextApiResponse } from 'next';

type TBody = {
  action_name: string;
  url: string;
  urlref: string;
  _rcn?: string;
  res: string;
  h: string;
  m: string;
  s: string;
  ua: string;
  lang: string;
  e_c?: string;
  e_a?: string;
  e_n?: string;
  e_v?: string;
};

const siteID = '202';
const rootStatsURL = 'https://stats.data.gouv.fr/matomo.php';
const authToken = process.env.MATOMO_AUTH_TOKEN;

const getRandomToken = (): string => {
  return (
    parseInt(Math.random().toFixed(15).slice(2)).toString(36) +
    parseInt(Math.random().toFixed(15).slice(2)).toString(36)
  );
};

export default async function getCities(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const {
    action_name,
    url,
    urlref,
    _rcn,
    res,
    h,
    m,
    s,
    ua,
    lang,
    e_c,
    e_a,
    e_n,
    e_v,
  } = request.body as TBody;
  const userIP =
    request.headers['x-real-ip'] || request.connection.remoteAddress;
  const cookies: Record<string, string> = {};
  (request.headers.cookie || '').split('; ').forEach(pair => {
    const entry = pair.split('=');
    cookies[entry[0]?.trim()] = entry[1]?.trim();
  });
  const uniqId = cookies.numbersUniqID || getRandomToken();

  const trackingParameters = {
    idsite: siteID, // site id
    rec: '1', // must be 1 to record
    action_name, // action being tracked. Can use / for muliple ex : 'navigation / buy'
    url, // where the user is
    urlref, // where the user comes from
    _id: uniqId, // unique visitor id ; use a token in the cookies
    rand: getRandomToken(), // random value to avoid caching
    apiv: '1', // matomo api version
    _rcn, // campaign name for referrer reports
    res, // user screen resolution ex : '1280x1024'
    h, // local time hour
    m, // local time minute
    s, // local time ssecond
    ua, // user agent
    lang, // user lang
    token_auth: authToken, // token to authenticate the tracker
    cip: userIP, // user IP (v4 or V6)
    e_c, // event category
    e_a, // event action
    e_n, // event name
    e_v, // event value : integer value (numeric), not a string.
  };
  const trackerRequest =
    rootStatsURL +
    '?' +
    Object.entries(trackingParameters)
      .filter(entry => Boolean(entry[1]))
      .map(entry => `${entry[0]}=${entry[1]}`)
      .join('&');
  await fetch(trackerRequest);

  if (!cookies.numbersUniqID) {
    response.setHeader('Set-Cookie', `numbersUniqID=${uniqId};`);
  }

  response.status(200).send('ok');
}
