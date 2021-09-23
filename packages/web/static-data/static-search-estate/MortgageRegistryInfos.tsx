import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const MortgageRegistryInfos = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que contiennent les registres des hypothèques ?</TITLES.H1>
      <p>
        Les registres des hypothèques contiennent les transcriptions,
        c'est-à-dire la copie intégrale, des actes de vente des biens
        immobiliers passés devant notaire.
      </p>

      <p>L'acte de vente passé devant le notaire contient :</p>

      <ul>
        <li>la date de l’acte ;</li>
        <li>le nom et le lieu de résidence du notaire ;</li>
        <li>le nom du vendeur et de l'acquéreur ;</li>
        <li>la description et la localisation du bien ;</li>
        <li>
          l’origine de la propriété du bien vendu : le nom du précédent vendeur,
          le nom et le lieu de résidence du notaire devant lequel a été passé
          l'acte précédent ainsi que la date de cet acte ;
        </li>
        <li>éventuellement, la présence de servitudes.</li>
      </ul>

      <p>
        <strong>De quand datent les registres des hypothèques ?</strong>
      </p>
      <p>
        Les registres des hypothèques sont tenus depuis 1799 par le service
        fiscal des hypothèques, devenu en 2010 le service de la publicité
        foncière.
      </p>

      <p>
        <strong>Que ne contiennent pas les registres des hypothèques ?</strong>
      </p>
      <p>
        Les pièces annexées à l'acte notarié ne sont pas transcrites. Vous n'y
        trouverez donc pas les plans, le procès-verbal de bornage, ou encore le
        cahier des charges de copropriété.
      </p>
      <p>
        <strong>
          Souhaitez-vous poursuivre votre recherche de registre des hypothèques
          ?
        </strong>
      </p>
      <div className="spacer" />

      <Link
        href={`${root}`}
        label="Oui, je souhaite poursuivre"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.DEAD_END}`}
        label="Non, ce document ne correspond pas à ma recherche"
        kind={ELinkKind.SECONDARY}
      />
      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
