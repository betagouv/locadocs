import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticSeineMartime = (): JSX.Element => (
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
      Les plans cadastraux napoléoniens (19e siècle) ainsi que les plans
      "calques" (1932-1984) sont en ligne sur{' '}
      <a href="https://www.archivesdepartementales76.net/">
        le site des Archives départementales de Seine-Maritime
      </a>
      .
    </p>

    <TITLES.H2>Plans actuels</TITLES.H2>

    <p>
      Les autres plans cadastraux peuvent être consultés en salle de lecture des
      Archives départementales de Seine-Maritime.
    </p>

    <ul>
      <li>Hôtel du département, quai Jean Moulin à Rouen</li>
      <li>
        ouverture sur rendez-vous du lundi au mardi de 8h45 à 12h30 et de 13h30
        à 17h et le mercredi de 8h45 à 12h30
      </li>
      <li>
        la prise de rendez-vous s'effectue sur le site internet des Archives
        départementales.
      </li>
    </ul>
  </>
);
