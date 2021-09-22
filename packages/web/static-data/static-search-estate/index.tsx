import { DataDocumentChoice } from './DataDocumentChoice';
import { DataRoot } from './DataRoot';

export const routes = {
  ROOT: '/',
  DOCUMENT_CHOICE: 'document-choice',
};

export const GLOBALS = {
  appTitle: 'Loc@docs : Simplifier l’accès aux documents publics',
  baseLine: 'Trouver un document foncier',
};

export const ROUTES_CONTENT = {
  [routes.ROOT]: DataRoot,
  [routes.DOCUMENT_CHOICE]: DataDocumentChoice,
};
