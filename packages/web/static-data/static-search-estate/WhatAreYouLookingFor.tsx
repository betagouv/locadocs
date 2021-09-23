import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const WhatAreYouLookingFor = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que recherchez-vous ?</TITLES.H1>

      <Link
        href={`${root}/${routes.LOOKING_FOR_ESTATE_PLANS}`}
        label="Les plans d'un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="L'année de construction d'un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="Des informations sur la mitoyenneté d'un mur"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="L'antériorité des travaux sur un bien immobilier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="Les limites d'une propriété ou la superficie d'un terrain"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="L’existence d’une servitude sur un terrain"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="Un titre de propriété"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
        label="L’historique des propriétaires d’un bien foncier"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}`}
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
