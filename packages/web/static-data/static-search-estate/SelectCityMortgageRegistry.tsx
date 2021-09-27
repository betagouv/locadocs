import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const SelectCityMortgageRegistry = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Dans quelle ville se situe le bien&nbsp;?</TITLES.H1>

      <Link
        href={`${root}`}
        label="Consulter un permis de construire"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.INFOS_BUILDING_PERMIT}`}
        label="Avoir plus d'informations sur le contenu d'un permis de construire"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.WHO_CAN_GET_BUILDING_PERMIT}`}
        label="Savoir qui a le droit de consulter un permis de construire"
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
