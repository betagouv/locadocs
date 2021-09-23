import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuideConstructionYear = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Je cherche l'année de construction d'un bien immobilier
      </TITLES.H1>

      <p>
        La construction d'une propriété bâtie doit être déclarée à
        l'administration fiscale et fait l'objet d'une mention sur les registres
        du <strong>cadastre</strong>. Cela permet de connaître de manière
        approximative la date de la construction.
      </p>
      <p>
        A partir de 1943, il est possible de chercher le{' '}
        <strong>permis de construire</strong> soumis à l'occasion de la
        construction.
      </p>

      <div className="spacer" />
      <Link
        href={`${root}/${routes.BEFORE_LAND_REGISTRY}`}
        label="Consulter le cadastre"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.BEFORE_BUILDING_PERMIT}`}
        label="Consulter un permis de construire"
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
