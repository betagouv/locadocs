import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticIleEtVilaine = (): JSX.Element => (
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
      <a href="https://archives-en-ligne.ille-et-vilaine.fr/thot_internet/FrmSommaireFrame.asp">
        le site des Archives départementales d'Ille-et-Vilaine
      </a>
      .
    </p>

    <TITLES.H2>Plans actuels</TITLES.H2>

    <p>
      Les autres plans cadastraux peuvent être consultés en salle de lecture des
      Archives départementales d'Ille-et-Vilaine.
    </p>

    <ul>
      <li>1 rue Jacques-Léonard à Rennes</li>
      <li>
        ouverture sur rendez-vous du lundi au mercredi de 9h à 12h30 et de 13h30
        à 17h.
      </li>
      <li>
        la prise de rendez-vous s’effectue par téléphone au 02 99 02 40 00 du
        lundi au mercredi ou par courriel{' '}
        <a href="mailto:archives@ille-et-vilaine.fr">
          archives@ille-et-vilaine.fr
        </a>
        .
      </li>
    </ul>
  </>
);
