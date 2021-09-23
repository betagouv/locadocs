import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const BuildingPermitInfos = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que contient un permis de construire ?</TITLES.H1>
      <p>
        Un dossier de permis de construire est susceptible de contenir les
        documents suivants :
      </p>

      <p></p>
      <ul>
        <li>La demande du pétitionnaire.</li>
        <li>
          Un plan de situation du terrain sur lequel la construction est prévue.
        </li>
        <li>Un plan de masse.</li>
        <li>Des élévations et coupes.</li>
        <li>Une notice descriptive.</li>
        <li>Les avis des services consultés.</li>
        <li>L'arrêté d'autorisation de construire.</li>
        <li>La déclaration d'achèvement des travaux.</li>
        <li>Le certificat de conformité.</li>
      </ul>

      <p>
        Les dossiers les plus anciens comportent moins de pièces et peuvent se
        réduire à la demande et à l’autorisation.
      </p>

      <p>
        <strong>De quand date le permis de construire ?</strong>
      </p>
      <p>
        Cette formalité est obligatoire depuis la loi du 15 juin 1943. Avant
        1943, les permis de construire n’existent que dans les communes qui se
        sont dotées d’une réglementation sur l’urbanisme.
      </p>

      <p>
        <strong>Que ne contient pas un permis de construire ?</strong>
      </p>
      <p>
        Lorsqu'il contient des plans, ceux-ci ne sont pas suffisamment détaillés
        pour permettre de connaître des informations relatives aux techniques de
        construction, aux réseaux électriques, aux canalisations, etc.
      </p>

      <p>
        <strong>
          Souhaitez-vous poursuivre votre recherche de permis de construire?
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
