import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticIleEtVilaine = (): JSX.Element => (
  <>
    <p>
      Le lieu de conservation des actes notariés dépend de la date de l’acte.
    </p>

    <TITLES.H2>Plus de 75 ans</TITLES.H2>

    <p>
      Les actes notariés de plus de 75 ans sont en théorie conservés aux
      Archives départementales d'Ille-et-Vilaine.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez consulter{' '}
      <a href="https://archives-en-ligne.ille-et-vilaine.fr/thot_internet/FrmSommaireFrame.asp">
        la liste des archives notariales conservées par le service
      </a>
      .
    </p>

    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre
      directement en salle de lecture des Archives départementales
      d'Ille-et-Vilaine.
    </p>

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

    <TITLES.H2>Moins de 75 ans</TITLES.H2>

    <p>
      Les actes notariés de moins de 75 ans sont conservés par le notaire qui
      les a établis ou par son successeur. Cette date n'est pas fixe et il
      arrive que le notaire conserve des actes plus anciens.
    </p>

    <p>Vous pouvez contacter directement le notaire ou son successeur.</p>

    <ul>
      <li>
        Retrouver les coordonnées du notaire ou de son successeur sur{' '}
        <a href="https://www.notaires.fr/fr/annuaires-notaire">
          l'annuaire en ligne des notaires de France
        </a>
        .
      </li>
      <li>
        Si vous ne connaissez pas le nom du successeur du notaire, il est
        possible de s'adresser à{' '}
        <a href="https://www.notaires.fr/fr/chambre-departementale-notaire-ille-et-vilaine-35">
          la chambre départementale des notaires d'Ille-et-Vilaine
        </a>
        .
      </li>
    </ul>
  </>
);
