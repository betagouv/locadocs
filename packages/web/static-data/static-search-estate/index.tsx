import { BeforeBuildingPermit } from './BeforeBuildingPermit';
import { BeforeLandRegistry } from './BeforeLandRegistry';
import { BeforeMortgageRegistry } from './BeforeMortgageRegistry';
import { BeforeNotarizedDeed } from './BeforeNotarizedDeed';
import { DeadEnd } from './DeadEnd';
import { DocumentChoice } from './DocumentChoice';
import { GuideConstructionYear } from './GuideConstructionYear';
import { GuideContiguity } from './GuideContiguity';
import { GuideLookingForEstatePlan } from './GuideLookingForEstatePlan';
import { GuideOther } from './GuideOther';
import { GuideOwnershipHistory } from './GuideOwnershipHistory';
import { GuidePreviousRepairs } from './GuidePreviousRepairs';
import { GuidePropertyDeed } from './GuidePropertyDeed';
import { GuidePropertyLimitsAndArea } from './GuidePropertyLimitsAndArea';
import { GuideServitude } from './GuideServitude';
import { InfosBuildingPermit } from './InfosBuildingPermit';
import { InfosLandRegistry } from './InfosLandRegistry';
import { InfosMortgageRegistry } from './InfosMortgageRegistry';
import { InfosNotarizedDeed } from './InfosNotarizedDeed';
import { Root } from './Root';
import { SelectCityBuildingPermit } from './SelectCityBuildingPermit';
import { SelectCityLandRegistry } from './SelectCityLandRegistry';
import { SelectCityLandRegistryDoc } from './SelectCityLandRegistryDoc';
import { SelectCityMortgageRegistry } from './SelectCityMortgageRegistry';
import { SelectCityNotarizedDeed } from './SelectCityNotarizedDeed';
import { SuggestDocument } from './SuggestDocument';
import { WhatAreYouLookingFor } from './WhatAreYouLookingFor';
import { WhoCanGetBuildingPermit } from './WhoCanGetBuildingPermit';
import { WhoCanGetLandRegistry } from './WhoCanGetLandRegistry';
import { WhoCanGetMortgageRegistry } from './WhoCanGetMortgageRegistry';
import { WhoCanGetNotarizedDeed } from './WhoCanGetNotarizedDeed';

export const routes = {
  BEFORE_BUILDING_PERMIT: 'before-building-permit',
  BEFORE_LAND_REGISTRY: 'before-land-registry',
  BEFORE_MORTGAGE_REGISTRY: 'before-mortgage-registry',
  BEFORE_NOTARIZED_DEED: 'before-notarized-deed',
  DEAD_END: 'dead-end',
  DOCUMENT_CHOICE: 'document-choice',
  GUIDE_CONSTRUCTION_YEAR: 'guide-construction-year',
  GUIDE_CONTIGUITY: 'guide-contiguity',
  GUIDE_LOOKING_FOR_ESTATE_PLANS: 'guide-looking-for-estate-plans',
  GUIDE_OTHER: 'guide-other',
  GUIDE_OWNERSHIP_HISTORY: 'guide-ownership-history',
  GUIDE_PREVIOUS_REPAIRS: 'guide-previous-repairs',
  GUIDE_PROPERTY_DEED: 'guide-property-deed',
  GUIDE_PROPERTY_LIMITS_AND_AREA: 'guide-property-limits-and-area',
  GUIDE_SERVITUDE: 'guide-servitude',
  INFOS_BUILDING_PERMIT: 'infos-building-permit',
  INFOS_LAND_REGISTRY: 'infos-land-registry',
  INFOS_MORTGAGE_REGISTRY: 'infos-mortgage-registry',
  INFOS_NOTARIZED_DEED: 'infos-notarized-deed',
  ROOT: '/',
  SELECT_CITY_BUILDING_PERMIT: 'select-city-building-permit',
  SELECT_CITY_LAND_REGISTRY_DOC: 'select-city-land-registry-doc',
  SELECT_CITY_LAND_REGISTRY: 'select-city-land-registry',
  SELECT_CITY_MORTGAGE_REGISTRY: 'select-city-mortgage-registry',
  SELECT_CITY_NOTARIZED_DEED: 'select-city-notarized-deed',
  SUGGEST_DOCUMENT: 'suggest-document',
  WHAT_ARE_YOU_LOOKING_FOR: 'what-are-you-looking-for',
  WHO_CAN_GET_BUILDING_PERMIT: 'who-can-get-building-permit',
  WHO_CAN_GET_LAND_REGISTRY: 'who-can-get-land-registry',
  WHO_CAN_GET_MORTGAGE_REGISTRY: 'who-can-get-mortgage-registry',
  WHO_CAN_GET_NOTARIZED_DEED: 'who-can-get-notarized-deed',
};

export const resultRoutes = {
  RESULT_BUILDING_PERMIT: 'result-building-permit',
  RESULT_LAND_REGISTRY_DOC: 'result-land-registry-doc',
  RESULT_LAND_REGISTRY: 'result-land-registry',
  RESULT_MORTGAGE_REGISTRY: 'result-mortgage-registry',
  RESULT_NOTARIZED_DEED: 'result-notarized-deed',
};

export const GLOBALS = {
  appTitle: 'Loc@docs : Simplifier l’accès aux documents publics',
  baseLine: 'Trouver un document sur un bien immobilier',
};

export const ROUTES_CONTENT = {
  [routes.BEFORE_BUILDING_PERMIT]: BeforeBuildingPermit,
  [routes.BEFORE_LAND_REGISTRY]: BeforeLandRegistry,
  [routes.BEFORE_MORTGAGE_REGISTRY]: BeforeMortgageRegistry,
  [routes.BEFORE_NOTARIZED_DEED]: BeforeNotarizedDeed,
  [routes.DEAD_END]: DeadEnd,
  [routes.DOCUMENT_CHOICE]: DocumentChoice,
  [routes.GUIDE_CONSTRUCTION_YEAR]: GuideConstructionYear,
  [routes.GUIDE_CONTIGUITY]: GuideContiguity,
  [routes.GUIDE_LOOKING_FOR_ESTATE_PLANS]: GuideLookingForEstatePlan,
  [routes.GUIDE_OTHER]: GuideOther,
  [routes.GUIDE_OWNERSHIP_HISTORY]: GuideOwnershipHistory,
  [routes.GUIDE_PREVIOUS_REPAIRS]: GuidePreviousRepairs,
  [routes.GUIDE_PROPERTY_DEED]: GuidePropertyDeed,
  [routes.GUIDE_PROPERTY_LIMITS_AND_AREA]: GuidePropertyLimitsAndArea,
  [routes.GUIDE_SERVITUDE]: GuideServitude,
  [routes.INFOS_BUILDING_PERMIT]: InfosBuildingPermit,
  [routes.INFOS_LAND_REGISTRY]: InfosLandRegistry,
  [routes.INFOS_MORTGAGE_REGISTRY]: InfosMortgageRegistry,
  [routes.INFOS_NOTARIZED_DEED]: InfosNotarizedDeed,
  [routes.ROOT]: Root,
  [routes.SELECT_CITY_BUILDING_PERMIT]: SelectCityBuildingPermit,
  [routes.SELECT_CITY_LAND_REGISTRY_DOC]: SelectCityLandRegistryDoc,
  [routes.SELECT_CITY_LAND_REGISTRY]: SelectCityLandRegistry,
  [routes.SELECT_CITY_MORTGAGE_REGISTRY]: SelectCityMortgageRegistry,
  [routes.SELECT_CITY_NOTARIZED_DEED]: SelectCityNotarizedDeed,
  [routes.SUGGEST_DOCUMENT]: SuggestDocument,
  [routes.WHAT_ARE_YOU_LOOKING_FOR]: WhatAreYouLookingFor,
  [routes.WHO_CAN_GET_BUILDING_PERMIT]: WhoCanGetBuildingPermit,
  [routes.WHO_CAN_GET_LAND_REGISTRY]: WhoCanGetLandRegistry,
  [routes.WHO_CAN_GET_MORTGAGE_REGISTRY]: WhoCanGetMortgageRegistry,
  [routes.WHO_CAN_GET_NOTARIZED_DEED]: WhoCanGetNotarizedDeed,
};
