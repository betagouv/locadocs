// Generic routes
export const HOME = '/';
export const ABOUT = '/about';
export const PERSONNAL_DATA = '/donnees-personnelles';
export const ACCESSIBILITE = '/accessibilite';

const EMBED_PREFIX = '/embed';

// Estate documents routes
export const ESTATE = '/search-estate';
export const ESTATE_EMBED = `${EMBED_PREFIX}${ESTATE}`;
export const ESTATE_EMBED_LOCKED = `${EMBED_PREFIX}${ESTATE}/city`;
