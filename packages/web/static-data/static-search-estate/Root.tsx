import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { routes } from './index';
import { mdiArrowLeft } from '@mdi/js';

export const Root = (buildRoute: (route: string) => string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Première étape...</TITLES.H1>
      <p>
        <strong>
          Savez-vous quel document administratif contient l’information que vous
          recherchez ?
        </strong>
      </p>
      <div className="spacer" />
      <Link
        href={buildRoute(routes.DOCUMENT_CHOICE)}
        label="Oui, j’ai identifié le document"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.WHAT_ARE_YOU_LOOKING_FOR)}
        label="Non, j’ai besoin d’être guidé"
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
