import * as TITLES from '@locadocs/design-system/components/Title';

export const StaticEure = (): JSX.Element => (
  <>
    <p>
      Le lieu de conservation des actes notariés dépend de la date de l’acte.
    </p>

    <TITLES.H2>Plus de 75 ans</TITLES.H2>

    <p>
      Les actes notariés de plus de 75 ans sont en théorie conservés aux
      Archives départementales de l'Eure.
    </p>

    <p>
      1. Dans un premier temps, pour vous assurer que l'acte que vous recherchez
      s'y trouve bien, vous pouvez interroger{' '}
      <a href="https://archives.eure.fr/search?preset=178&view=list">
        la liste des archives notariales conservées par le service
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
        <a href="https://www.notaires.fr/fr/chambre-departementale-notaire-eure-27">
          la chambre départementale des notaires de l'Eure
        </a>
        .
      </li>
    </ul>
  </>
);
