import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticSeineMartime = (): JSX.Element => (
  <>
    <p>
      Le lieu de conservation des actes notariés dépend de la date de l’acte.
    </p>

    <TITLES.H2>Plus de 75 ans</TITLES.H2>

    <p>
      Les actes notariés de plus de 75 ans sont en théorie conservés aux
      Archives départementales de Seine-Maritime.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://www.archivesdepartementales76.net/data/files/ad76.diffusion/images/Z_IR_pdf/pdf/FRAD076_IR_E/2E/FRAD076_IR_E_002E_index.pdf">
        la liste des archives notariales conservées par le service
      </a>
      .
    </p>

    <p>
      2. Après confirmation de cette information, vous pouvez vous rendre
      directement en salle de lecture des Archives départementales de
      Seine-Maritime.
    </p>

    <ul>
      <li>Pôle culturel Grammont, 42 rue Henri II Plantagenêt à Rouen</li>
      <li>
        ouverture sur rendez-vous du mardi au mercredi de 13h à 17h et du jeudi
        au vendredi de 8h45 à 12h et de 13h à 17h
      </li>
      <li>
        la prise de rendez-vous s'effectue{' '}
        <a href="https://www.seinemaritime.fr/reservation-archives/">
          sur le site internet des Archives départementales
        </a>
        .
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
        <a href="https://www.notaires.fr/fr/chambre-departementale-notaire-seine-maritime-76">
          la chambre départementale des notaires de Seine-Maritime
        </a>
        .
      </li>
    </ul>
  </>
);
