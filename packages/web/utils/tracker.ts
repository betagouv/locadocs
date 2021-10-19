/* eslint-disable @typescript-eslint/naming-convention */
type TTrackeEvent = {
  actionName: string;
  campaign?: string;
  eventAction?: string;
  eventCategory?: string;
  eventName?: string;
  eventValue?: number;
};

export const track: (event: TTrackeEvent) => void = ({
  actionName,
  campaign,
  eventAction,
  eventCategory,
  eventName,
  eventValue,
}: TTrackeEvent): void => {
  const now = new Date();
  const data = {
    action_name: actionName, // action being tracked. Can use / for muliple ex : 'navigation / buy'
    url: window.location.href, // where the user is
    urlref: document.referrer, // where the user comes from
    _rcn: campaign, // campaign name for referrer reports
    res: `${window.screen.width}x${window.screen.height}`, // user screen resolution ex : '1280x1024'
    h: now.getHours(), // local time
    m: now.getMinutes(), // local time
    s: now.getSeconds(), // local time
    ua: navigator.userAgent, // user agent
    lang: navigator.language, // locale
    e_c: eventCategory, // event
    e_a: eventAction, // event
    e_n: eventName, // event
    e_v: eventValue ? parseInt(eventValue as unknown as string, 10) : undefined, // event /!\ must be an integer
  };

  fetch(`/api/numbers`, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
