import React from 'react';
import type { City } from '@locadocs/shared/types/City';
import * as TITLES from '@locadocs/design-system/components/Title';

import { citiesPontAudemer } from './citiesPontAudemer';
import { citiesAndelys } from './citiesAndelys';
import { citiesLouviers } from './citiesLouviers';
import { citiesBernay } from './citiesBernay';
// import { citiesEvreux } from './citiesEvreux';

type TParams = {
  city: City;
};

export const StaticEure: React.FC<TParams> = ({ city }): JSX.Element => {
  let target = <StaticEvreux />;

  if (citiesAndelys.includes(city.name)) {
    target = <StaticAndelys />;
  } else if (citiesPontAudemer.includes(city.name)) {
    target = <StaticPontAudemer />;
  } else if (citiesLouviers.includes(city.name)) {
    target = <StaticLouviers />;
  } else if (citiesBernay.includes(city.name)) {
    target = <StaticBernay />;
  }

  return target;
};

const StaticEvreux = () => (
  <>
    <TITLES.H2>Entre 1798 et 1897 et entre 1942 et 1955</TITLES.H2>

    <p>
      Les registres des transcriptions hypothécaires établis entre 1798 et 1897
      et entre 1942 et 1955 sont disponibles aux Archives départementales de
      l'Eure.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://archives.eure.fr/search?preset=194&view=list">
        la liste des archives hypothécaires conservées par le service
      </a>
      .
    </p>

    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre en
      salle de lecture.
    </p>

    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>réservation obligatoire par courriel (archives@eure.fr)</li>
    </ul>

    <TITLES.H2>Entre 1898 et 1941</TITLES.H2>

    <p>
      Pour obtenir l'accès aux registres des transcriptions hypothécaires
      établis entre 1898 et 1941, il convient de s'adresser au Service de la
      publicité foncière d'Auxerre.
    </p>

    <ul>
      <li>8 rue des Moreaux, BP 29, 89010 Auxerre Cedex</li>
      <li>03 86 72 50 38</li>
      <li>spf.auxerre1@dgfip.finances.gouv.fr</li>
    </ul>

    <TITLES.H2>Après 1955</TITLES.H2>

    <p>
      Pour obtenir l’accès à la documentation hypothécaire postérieure à 1955,
      il convient de s'adresser au Service de la publicité foncière et de
      l'enregistrement d'Evreux.
    </p>

    <ul>
      <li>Centre des Finances publiques, 11 rue Georges Politzer à Evreux</li>
      <li>02 32 23 31 00</li>
      <li>spf.evreux@dgfip.finances.gouv.fr</li>
      <li>ouverture du lundi au vendredi de 08h45 à 12h et de 13h30 à 16h15</li>
      <li>fermeture le mardi après-midi et le jeudi après-midi</li>
    </ul>
  </>
);

const StaticAndelys = () => (
  <>
    <TITLES.H2>Avant 1940</TITLES.H2>

    <p className="error">
      Les registres de transcriptions hypothécaires antérieurs à 1940 ont été
      détruits durant la Seconde guerre mondiale.
    </p>

    <TITLES.H2>Entre 1940 et 1946</TITLES.H2>

    <p>
      Pour obtenir l'accès aux registres des transcriptions hypothécaires
      établis entre 1940 et 1946, il convient de s'adresser au Service de la
      publicité foncière d'Auxerre.
    </p>

    <ul>
      <li>8 rue des Moreaux, BP 29, 89010 Auxerre Cedex</li>
      <li>03 86 72 50 38</li>
      <li>spf.auxerre1@dgfip.finances.gouv.fr</li>
    </ul>

    <TITLES.H2>Après 1946</TITLES.H2>

    <p>
      Pour obtenir l’accès à la documentation hypothécaire postérieure à 1946,
      il convient de s'adresser au Service de la publicité foncière et de
      l'enregistrement d'Evreux.
    </p>

    <ul>
      <li>Centre des Finances publiques, 11 rue Georges Politzer à Evreux</li>
      <li>02 32 23 31 00</li>
      <li>spf.evreux@dgfip.finances.gouv.fr</li>
      <li>ouverture du lundi au vendredi de 08h45 à 12h et de 13h30 à 16h15</li>
      <li>fermeture le mardi après-midi et le jeudi après-midi</li>
    </ul>
  </>
);

const StaticLouviers = () => (
  <>
    <TITLES.H2>Entre 1798 et 1897</TITLES.H2>
    <p>
      Les registres des transcriptions hypothécaires établis entre 1798 et 1897
      sont disponibles aux Archives départementales de l'Eure.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://archives.eure.fr/search?preset=194&view=list">
        la liste des archives hypothécaires conservées par le service
      </a>
      .
    </p>

    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre en
      salle de lecture.
    </p>

    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>réservation obligatoire par courriel (archives@eure.fr)</li>
    </ul>

    <TITLES.H2>Entre 1898 et 1947</TITLES.H2>

    <p>
      Pour obtenir l'accès aux registres des transcriptions hypothécaires
      établis entre 1898 et 1947, il convient de s'adresser au Service de la
      publicité foncière d'Auxerre.
    </p>

    <ul>
      <li>8 rue des Moreaux, BP 29, 89010 Auxerre Cedex</li>
      <li>03 86 72 50 38</li>
      <li>spf.auxerre1@dgfip.finances.gouv.fr</li>
    </ul>

    <TITLES.H2>Après 1947</TITLES.H2>

    <p>
      Pour obtenir l’accès à la documentation hypothécaire postérieure à 1947,
      il convient de s'adresser au Service de la publicité foncière et de
      l'enregistrement d'Evreux.
    </p>

    <ul>
      <li>Centre des Finances publiques, 11 rue Georges Politzer à Evreux</li>
      <li>02 32 23 31 00</li>
      <li>spf.evreux@dgfip.finances.gouv.fr</li>
      <li>ouverture du lundi au vendredi de 08h45 à 12h et de 13h30 à 16h15</li>
      <li>fermeture le mardi après-midi et le jeudi après-midi</li>
    </ul>
  </>
);

const StaticBernay = () => (
  <>
    <TITLES.H2>Entre 1798 et 1897</TITLES.H2>

    <p>
      Les registres des transcriptions hypothécaires établis entre 1798 et 1897
      sont disponibles aux Archives départementales de l'Eure.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://archives.eure.fr/search?preset=194&view=list">
        la liste des archives hypothécaires conservées par le service
      </a>
      .
    </p>
    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre en
      salle de lecture.
    </p>
    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>réservation obligatoire par courriel (archives@eure.fr)</li>
    </ul>

    <TITLES.H2>Entre 1898 et 1947</TITLES.H2>

    <p>
      Pour obtenir l'accès aux registres des transcriptions hypothécaires
      établis entre 1898 et 1947, il convient de s'adresser au Service de la
      publicité foncière d'Auxerre.
    </p>

    <ul>
      <li>8 rue des Moreaux, BP 29, 89010 Auxerre Cedex</li>
      <li>03 86 72 50 38</li>
      <li>spf.auxerre1@dgfip.finances.gouv.fr</li>
    </ul>

    <TITLES.H2>Après 1947</TITLES.H2>

    <p>
      Pour obtenir l’accès à la documentation hypothécaire postérieure à 1947,
      il convient de s'adresser au Service de la publicité foncière et de
      l'enregistrement d'Evreux.
    </p>

    <ul>
      <li>Centre des Finances publiques, 11 rue Georges Politzer à Evreux</li>
      <li>02 32 23 31 00</li>
      <li>spf.evreux@dgfip.finances.gouv.fr</li>
      <li>ouverture du lundi au vendredi de 08h45 à 12h et de 13h30 à 16h15</li>
      <li>fermeture le mardi après-midi et le jeudi après-midi</li>
    </ul>
  </>
);

const StaticPontAudemer = () => (
  <>
    <TITLES.H2>Entre 1798 et 1897</TITLES.H2>
    <p>
      Les registres des transcriptions hypothécaires établis entre 1798 et 1897
      sont disponibles aux Archives départementales de l'Eure.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://archives.eure.fr/search?preset=194&view=list">
        la liste des archives hypothécaires conservées par le service
      </a>
      .
    </p>

    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre en
      salle de lecture.
    </p>

    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>réservation obligatoire par courriel (archives@eure.fr)</li>
    </ul>

    <TITLES.H2>Entre 1898 et 1946</TITLES.H2>

    <p>
      Pour obtenir l'accès aux registres des transcriptions hypothécaires
      établis entre 1898 et 1946, il convient de s'adresser au Service de la
      publicité foncière d'Auxerre.
    </p>

    <ul>
      <li>8 rue des Moreaux, BP 29, 89010 Auxerre Cedex</li>
      <li>03 86 72 50 38</li>
      <li>spf.auxerre1@dgfip.finances.gouv.fr</li>
    </ul>

    <TITLES.H2>Après 1946</TITLES.H2>

    <p>
      Pour obtenir l’accès à la documentation hypothécaire postérieure à 1946,
      il convient de s'adresser au Service de la publicité foncière et de
      l'enregistrement d'Evreux.
    </p>

    <ul>
      <li>Centre des Finances publiques, 11 rue Georges Politzer à Evreux</li>
      <li>02 32 23 31 00</li>
      <li>spf.evreux@dgfip.finances.gouv.fr</li>
      <li>ouverture du lundi au vendredi de 08h45 à 12h et de 13h30 à 16h15</li>
      <li>fermeture le mardi après-midi et le jeudi après-midi</li>
    </ul>
  </>
);
