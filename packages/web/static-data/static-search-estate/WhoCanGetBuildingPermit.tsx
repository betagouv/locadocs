import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
// import { routes } from './index';

export const WhoCanGetBuildingPermit = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Qui peut consulter un permis de construire ?</TITLES.H1>

      <p>
        Les dossiers de permis de construire sont communicables à toute
        personne, dès lors que l'instruction est terminée.
      </p>

      <p>
        Toutefois, en raison de la protection de la vie privée ou d’autres
        secrets protégés, des restrictions de communication peuvent être
        appliquées à certaines informations.
      </p>

      <blockquote>
        Vous trouverez plus d'informations sur la communicabilité des permis de
        construire sur le{' '}
        <a
          href="https://www.cada.fr/administration/permis-de-construire"
          target="_blank"
          rel="noopener noreferrer"
        >
          site internet de la Commission d'accès aux documents administratifs
        </a>
        .
      </blockquote>

      <div className="spacer" />
      <Link
        href={`${root}`}
        label="Je souhaite consulter un permis de construire"
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
