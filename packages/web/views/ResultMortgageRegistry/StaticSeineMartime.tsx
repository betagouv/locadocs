import React from 'react';
import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticSeineMartime: React.FC = ({ children }): JSX.Element => (
  <>
    <TITLES.H2>Les actes de vente jusqu'à 1955</TITLES.H2>
    <p>
      Les registres des transcriptions hypothécaires sont conservés aux Archives
      départementales de Seine-Maritime jusqu’en 1955 inclus.
    </p>
    <p>Se rendre en salle de lecture des Archives départementales</p>
    <ul>
      <li>Pôle culturel Grammont, 42 rue Henri II Plantagenêt à Rouen</li>
      <li>
        ouverture sur rendez-vous du mardi au mercredi de 13h à 17h et du jeudi
        au vendredi de 8h45 à 12h et de 13h à 17h
      </li>
      <li>
        la prise de rendez-vous s'effectue sur le site internet des Archives
        départementales.
      </li>
    </ul>

    <p className="error">
      La documentation antérieure à 1944 des bureaux des hypothèques du Havre a
      été détruite durant la Seconde guerre mondiale.
    </p>
    {children}
  </>
);
