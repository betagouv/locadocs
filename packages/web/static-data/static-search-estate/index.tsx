import { BeforeBuildingPermit } from './BeforeBuildingPermit';
import { BeforeNotarizedDeed } from './BeforeNotarizedDeed';
import { InfosBuildingPermit } from './InfosBuildingPermit';
import { DeadEnd } from './DeadEnd';
import { DocumentChoice } from './DocumentChoice';
import { GuideLookingForEstatePlan } from './GuideLookingForEstatePlan';
import { Root } from './Root';
import { WhatAreYouLookingFor } from './WhatAreYouLookingFor';
import { WhoCanGetBuildingPermit } from './WhoCanGetBuildingPermit';
import { InfosNotarizedDeed } from './InfosNotarizedDeed';
import { WhoCanGetNotarizedDeed } from './WhoCanGetNotarizedDeed';
import { BeforeMortgageRegistry } from './BeforeMortgageRegistry';
import { WhoCanGetMortgageRegistry } from './WhoCanGetMortgageRegistry';
import { InfosMortgageRegistry } from './InfosMortgageRegistry';
import { WhoCanGetLandRegistry } from './WhoCanGetLandRegistry';
import { InfosLandRegistry } from './InfosLandRegistry';
import { BeforeLandRegistry } from './BeforeLandRegistry';
import { SuggestDocument } from './SuggestDocument';
import { GuideConstructionYear } from './GuideConstructionYear';
import { GuideContiguity } from './GuideContiguity';
import { GuidePreviousRepairs } from './GuidePreviousRepairs';
import { GuidePropertyLimitsAndArea } from './GuidePropertyLimitsAndArea';
import { GuideServitude } from './GuideServitude';
import { GuidePropertyDeed } from './GuidePropertyDeed';
import { GuideOwnershipHistory } from './GuideOwnershipHistory';
import { GuideOther } from './GuideOther';
import { SelectCityBuildingPermit } from './SelectCityBuildingPermit';
import { SelectCityLandRegistry } from './SelectCityLandRegistry';
import { SelectCityLandRegistryDoc } from './SelectCityLandRegistryDoc';
import { SelectCityMortgageRegistry } from './SelectCityMortgageRegistry';
import { SelectCityNotarizedDeed } from './SelectCityNotarizedDeed';

export const routes = {
  BEFORE_BUILDING_PERMIT: 'before-building-permit',
  BEFORE_NOTARIZED_DEED: 'before-notarized-deed',
  INFOS_BUILDING_PERMIT: 'infos-building-permit',
  DEAD_END: 'dead-end',
  DOCUMENT_CHOICE: 'document-choice',
  GUIDE_LOOKING_FOR_ESTATE_PLANS: 'guide-looking-for-estate-plans',
  ROOT: '/',
  WHAT_ARE_YOU_LOOKING_FOR: 'what-are-you-looking-for',
  WHO_CAN_GET_BUILDING_PERMIT: 'who-can-get-building-permit',
  INFOS_NOTARIZED_DEED: 'infos-notarized-deed',
  WHO_CAN_GET_NOTARIZED_DEED: 'who-can-get-notarized-deed',
  BEFORE_MORTGAGE_REGISTRY: 'before-mortgage-registry',
  WHO_CAN_GET_MORTGAGE_REGISTRY: 'who-can-get-mortgage-registry',
  INFOS_MORTGAGE_REGISTRY: 'infos-mortgage-registry',
  WHO_CAN_GET_LAND_REGISTRY: 'who-can-get-land-registry',
  INFOS_LAND_REGISTRY: 'infos-land-registry',
  BEFORE_LAND_REGISTRY: 'before-land-registry',
  SUGGEST_DOCUMENT: 'suggest-document',
  GUIDE_CONSTRUCTION_YEAR: 'guide-construction-year',
  GUIDE_CONTIGUITY: 'guide-contiguity',
  GUIDE_PREVIOUS_REPAIRS: 'guide-previous-repairs',
  GUIDE_PROPERTY_LIMITS_AND_AREA: 'guide-property-limits-and-area',
  GUIDE_SERVITUDE: 'guide-servitude',
  GUIDE_PROPERTY_DEED: 'guide-property-deed',
  GUIDE_OWNERSHIP_HISTORY: 'guide-ownership-history',
  GUIDE_OTHER: 'guide-other',
  SELECT_CITY_BUILDING_PERMIT: 'select-city-building-permit',
  SELECT_CITY_LAND_REGISTRY: 'select-city-land-registry',
  SELECT_CITY_LAND_REGISTRY_DOC: 'select-city-land-registry-doc',
  SELECT_CITY_MORTGAGE_REGISTRY: 'select-city-mortgage-registry',
  SELECT_CITY_NOTARIZED_DEED: 'select-city-notarized-deed',
};

export const GLOBALS = {
  appTitle: 'Loc@docs : Simplifier l’accès aux documents publics',
  baseLine: 'Trouver un document sur un bien immobilier',
};

export const ROUTES_CONTENT = {
  [routes.BEFORE_BUILDING_PERMIT]: BeforeBuildingPermit,
  [routes.BEFORE_NOTARIZED_DEED]: BeforeNotarizedDeed,
  [routes.INFOS_BUILDING_PERMIT]: InfosBuildingPermit,
  [routes.DEAD_END]: DeadEnd,
  [routes.DOCUMENT_CHOICE]: DocumentChoice,
  [routes.GUIDE_LOOKING_FOR_ESTATE_PLANS]: GuideLookingForEstatePlan,
  [routes.ROOT]: Root,
  [routes.WHAT_ARE_YOU_LOOKING_FOR]: WhatAreYouLookingFor,
  [routes.WHO_CAN_GET_BUILDING_PERMIT]: WhoCanGetBuildingPermit,
  [routes.INFOS_NOTARIZED_DEED]: InfosNotarizedDeed,
  [routes.WHO_CAN_GET_NOTARIZED_DEED]: WhoCanGetNotarizedDeed,
  [routes.BEFORE_MORTGAGE_REGISTRY]: BeforeMortgageRegistry,
  [routes.WHO_CAN_GET_MORTGAGE_REGISTRY]: WhoCanGetMortgageRegistry,
  [routes.INFOS_MORTGAGE_REGISTRY]: InfosMortgageRegistry,
  [routes.WHO_CAN_GET_LAND_REGISTRY]: WhoCanGetLandRegistry,
  [routes.INFOS_LAND_REGISTRY]: InfosLandRegistry,
  [routes.BEFORE_LAND_REGISTRY]: BeforeLandRegistry,
  [routes.SUGGEST_DOCUMENT]: SuggestDocument,
  [routes.GUIDE_CONSTRUCTION_YEAR]: GuideConstructionYear,
  [routes.GUIDE_CONTIGUITY]: GuideContiguity,
  [routes.GUIDE_PREVIOUS_REPAIRS]: GuidePreviousRepairs,
  [routes.GUIDE_PROPERTY_LIMITS_AND_AREA]: GuidePropertyLimitsAndArea,
  [routes.GUIDE_SERVITUDE]: GuideServitude,
  [routes.GUIDE_PROPERTY_DEED]: GuidePropertyDeed,
  [routes.GUIDE_OWNERSHIP_HISTORY]: GuideOwnershipHistory,
  [routes.GUIDE_OTHER]: GuideOther,
  [routes.SELECT_CITY_BUILDING_PERMIT]: SelectCityBuildingPermit,
  [routes.SELECT_CITY_LAND_REGISTRY]: SelectCityLandRegistry,
  [routes.SELECT_CITY_LAND_REGISTRY_DOC]: SelectCityLandRegistryDoc,
  [routes.SELECT_CITY_MORTGAGE_REGISTRY]: SelectCityMortgageRegistry,
  [routes.SELECT_CITY_NOTARIZED_DEED]: SelectCityNotarizedDeed,
};
