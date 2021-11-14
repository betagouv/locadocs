import React from 'react';
import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticIleEtVilaine: React.FC = ({ children }): JSX.Element => (
  <>
    <TITLES.H2>Les actes de vente jusqu'à 1955</TITLES.H2>
    <p>
      Les registres des transcriptions hypothécaires de 1798 à 1955 sont
      disponibles aux Archives départementales d'Ille-et-Vilaine.
    </p>
    <p>Se rendre en salle de lecture des Archives départementales</p>
    <ul>
      <li>1 rue Jacques-Léonard à Rennes</li>
      <li>
        ouverture sur rendez-vous du lundi au mercredi de 9h à 12h30 et de 13h30
        à 17h.
      </li>
      <li>
        la prise de rendez-vous s’effectue par téléphone au 02 99 02 40 00 du
        lundi au mercredi ou par courriel (archives@ille-et-vilaine.fr).
      </li>
    </ul>

    <p className="error">
      La documentation antérieure à 1944 des bureaux des hypothèques du Havre a
      été détruite durant la Seconde guerre mondiale.
    </p>

    {children}
  </>
);
