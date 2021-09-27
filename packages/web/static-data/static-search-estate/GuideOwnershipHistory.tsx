import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuideOwnershipHistory = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Je cherche l'historique des propriétaires d'un bien foncier
      </TITLES.H1>

      <p>
        Le <strong>titre de propriété</strong> mentionne le nom du précédent
        vendeur, le nom et le lieu de résidence du notaire devant lequel a été
        passé l'acte précédent ainsi que la date. Il est ainsi possible de
        retrouver le précédent acte de vente et, d'un acte à l'autre, de
        retracer la chronologie des propriétaires successifs. Cette recherche
        peut s'effectuer dans les <strong>archives notariales</strong> ou dans
        les <strong>registres des hypothèques</strong> qui contiennent une copie
        des actes notariés.
      </p>
      <p>
        Il est également possible de trouver, à partir du{' '}
        <strong>cadastre</strong>, le nom des propriétaires successifs d'un bien
        foncier ainsi que les dates approximatives de changement de
        propriétaire, et ce jusqu'au début du 19e siècle. Le cadastre peut
        notamment être utile lorsque le bien s'est transmis sans faire l'objet
        d'une vente (par héritage par exemple).
      </p>

      <div className="spacer" />

      <Link
        href={buildRoute(routes.GUIDE_PROPERTY_DEED)}
        label="Chercher un titre de propriété"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.BEFORE_BUILDING_PERMIT)}
        label="Consulter un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.BEFORE_MORTGAGE_REGISTRY)}
        label="Consulter un registre des hypothèques"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.BEFORE_LAND_REGISTRY)}
        label="Consulter le cadastre"
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
