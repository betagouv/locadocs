import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticEure = (): JSX.Element => (
  <>
    <p>
      Le plan cadastral français est en ligne sur le site{' '}
      <a href="https://www.cadastre.gouv.fr/scpc/accueil.do">
        cadastre.gouv.fr
      </a>
      .
    </p>

    <TITLES.H2>Plans napoléoniens</TITLES.H2>

    <p>
      Les plans cadastraux napoléoniens (19e siècle) sont en ligne sur{' '}
      <a href="https://archives.eure.fr/search?preset=106&view=medias">
        le site des Archives départementales de l'Eure.
      </a>
      .
    </p>

    <TITLES.H2>Plans actuels</TITLES.H2>

    <p>
      Les autres plans cadastraux peuvent être consultés en salle de lecture des
      Archives départementales de L’Eure.
    </p>

    <ul>
      <li>2, rue de Verdun à Evreux</li>
      <li>ouverture le mercredi et le vendredi, de 9h à 12h et de 13h à 16h</li>
      <li>
        réservation obligatoire par courriel{' '}
        <a href="mailto:archives@eure.fr">archives@eure.fr</a>
      </li>
    </ul>
  </>
);
