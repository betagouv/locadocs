import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const WhatAreYouLookingFor = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que recherchez-vous&nbsp;?</TITLES.H1>

      <Link
        href={buildRoute(routes.GUIDE_LOOKING_FOR_ESTATE_PLANS)}
        label="Les plans d'un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_CONSTRUCTION_YEAR)}
        label="L'année de construction d'un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_CONTIGUITY)}
        label="Des informations sur la mitoyenneté d'un mur"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_PREVIOUS_REPAIRS)}
        label="L'antériorité des travaux sur un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_PROPERTY_LIMITS_AND_AREA)}
        label="Les limites d'une propriété ou la superficie d'un terrain"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_SERVITUDE)}
        label="L’existence d’une servitude sur un terrain"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_PROPERTY_DEED)}
        label="Un titre de propriété"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_OWNERSHIP_HISTORY)}
        label="L’historique des propriétaires d’un bien foncier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.GUIDE_OTHER)}
        label="J'ai une autre question"
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
