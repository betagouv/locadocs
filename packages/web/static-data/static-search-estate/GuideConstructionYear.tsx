import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const GuideConstructionYear = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <BreadCrump
        steps={[
          { label: 'commencer ma recherche', href: buildRoute(routes.ROOT) },
          {
            label: 'que cherchez-vous ?',
            href: buildRoute(routes.WHAT_ARE_YOU_LOOKING_FOR),
          },
          { label: 'l’année de construction d’un bien immobilier' },
        ]}
      />

      <TITLES.H1>
        Je cherche l'année de construction d'un bien immobilier
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          La construction d'une propriété bâtie doit être déclarée à
          l'administration fiscale et fait l'objet d'une mention sur les
          registres du <strong>cadastre</strong>. Cela permet de connaître de
          manière approximative la date de la construction.
        </p>
        <p>
          A partir de 1943, il est possible de chercher le{' '}
          <strong>permis de construire</strong> soumis à l'occasion de la
          construction.
        </p>
      </div>

      <Link
        href={buildRoute(routes.BEFORE_LAND_REGISTRY)}
        label="Le cadastre"
        kind={ELinkKind.SECONDARY}
      />

      <Link
        href={buildRoute(routes.BEFORE_BUILDING_PERMIT)}
        label="Les permis de construire"
        kind={ELinkKind.SECONDARY}
      />

      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />

      <Questionnaire page="guide-construction-year" />
    </>
  );
};
