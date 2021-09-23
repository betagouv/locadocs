import { BeforeBuildingPermit } from './BeforeBuildingPermit';
import { BeforeNotarizedDeed } from './BeforeNotarizedDeed';
import { BuildingPermitInfos } from './BuildingPermitInfos';
import { DeadEnd } from './DeadEnd';
import { DocumentChoice } from './DocumentChoice';
import { LookingForEstatePlan } from './LookingForEstatePlan';
import { Root } from './Root';
import { WhatAreYouLookingFor } from './WhatAreYouLookingFor';
import { WhoCanGetBuildingPermit } from './WhoCanGetBuildingPermit';
import { NotarizedDeedInfos } from './NotarizedDeedInfos';
import { WhoCanGetNotarizedDeed } from './WhoCanGetNotarizedDeed';
import { BeforeMortgageRegistry } from './BeforeMortgageRegistry';
import { WhoCanGetMortgageRegistry } from './WhoCanGetMortgageRegistry';
import { MortgageRegistryInfos } from './MortgageRegistryInfos';

export const routes = {
  BEFORE_BUILDING_PERMIT: 'before-building-permit',
  BEFORE_NOTARIZED_DEED: 'before-notarized-deed',
  BUILDING_PERMIT_INFOS: 'building-permit-infos',
  DEAD_END: 'dead-end',
  DOCUMENT_CHOICE: 'document-choice',
  LOOKING_FOR_ESTATE_PLANS: 'looking-for-estate-plans',
  ROOT: '/',
  WHAT_ARE_YOU_LOOKING_FOR: 'what-are-you-looking-for',
  WHO_CAN_GET_BUILDING_PERMIT: 'who-can-get-building-permit',
  NOTARIZED_DEED_INFOS: 'notarized-deed-infos',
  WHO_CAN_GET_NOTARIZED_DEED: 'who-can-get-notarized-deed',
  BEFORE_MORTGAGE_REGISTRY: 'before-mortgage-registry',
  WHO_CAN_GET_MORTGAGE_REGISTRY: 'who-can-get-mortgage-registry',
  MORTGAGE_REGISTRY_INFOS: 'mortgage-registry-infos',
};

export const GLOBALS = {
  appTitle: 'Loc@docs : Simplifier l’accès aux documents publics',
  baseLine: 'Trouver un document sur un bien immobilier',
};

export const ROUTES_CONTENT = {
  [routes.BEFORE_BUILDING_PERMIT]: BeforeBuildingPermit,
  [routes.BEFORE_NOTARIZED_DEED]: BeforeNotarizedDeed,
  [routes.BUILDING_PERMIT_INFOS]: BuildingPermitInfos,
  [routes.DEAD_END]: DeadEnd,
  [routes.DOCUMENT_CHOICE]: DocumentChoice,
  [routes.LOOKING_FOR_ESTATE_PLANS]: LookingForEstatePlan,
  [routes.ROOT]: Root,
  [routes.WHAT_ARE_YOU_LOOKING_FOR]: WhatAreYouLookingFor,
  [routes.WHO_CAN_GET_BUILDING_PERMIT]: WhoCanGetBuildingPermit,
  [routes.NOTARIZED_DEED_INFOS]: NotarizedDeedInfos,
  [routes.WHO_CAN_GET_NOTARIZED_DEED]: WhoCanGetNotarizedDeed,
  [routes.BEFORE_MORTGAGE_REGISTRY]: BeforeMortgageRegistry,
  [routes.WHO_CAN_GET_MORTGAGE_REGISTRY]: WhoCanGetMortgageRegistry,
  [routes.MORTGAGE_REGISTRY_INFOS]: MortgageRegistryInfos,
};
