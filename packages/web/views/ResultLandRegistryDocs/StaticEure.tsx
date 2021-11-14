import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticEure = (): JSX.Element => (
  <>
    <TITLES.H2>Pour les documents jusqu'en 1987</TITLES.H2>

    <p>
      Les Archives départementales de l'Eure conservent la documentation
      cadastrale écrite jusqu'en 1987.
    </p>

    <p>
      Vous pouvez vous rendre en salle de lecture des Archives départementales
      de l'Eure.
    </p>

    <p>Se rendre en salle de lecture des Archives départementales</p>

    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>
        réservation obligatoire par courriel{' '}
        <a href="mailto:archives@eure.fr">archives@eure.fr</a>
      </li>
    </ul>

    <p className="error">
      La documentation cadastrale écrite des années 1974 à 1979 n'a pas été
      conservée.
    </p>

    <TITLES.H2>Après 1987</TITLES.H2>

    <p>
      Pour obtenir l'accès à la documentation cadastrale postérieure à 1987, il
      convient de s'adresser au Service départemental des impôts fonciers de
      Louviers.
    </p>

    <p>Contacter le Service départemental des impôts fonciers de Louviers</p>

    <ul>
      <li>place de la demi-Lune à Louviers</li>
      <li>02 32 25 71 13</li>
      <li>
        ouverture les lundi, mercredi et jeudi de 08h45 à 12h et de 13h30 à
        16h15
      </li>
      <li>fermeture les mardi et jeudi</li>
    </ul>
  </>
);
