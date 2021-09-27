import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const DeadEnd = (buildRoute: (route: string) => string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Souhaitez-vous consulter d'autres pistes de recherche ?
      </TITLES.H1>

      <Link
        href={buildRoute(routes.WHAT_ARE_YOU_LOOKING_FOR)}
        label="Oui, indiquez-moi d'autres pistes"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute('')}
        label="Non, j'ai terminé. je donne mon avis pour améliorer l'outil"
        kind={ELinkKind.SECONDARY}
      />

      <div className="spacer" />
      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />
    </>
  );
};
