import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const BeforeNotarizedDeed = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que souhaitez-vous faire&nbsp;?</TITLES.H1>

      <Link
        href={buildRoute('')}
        label="Consulter un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.INFOS_NOTARIZED_DEED)}
        label="Avoir plus d'informations sur le contenu d'un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute(routes.WHO_CAN_GET_NOTARIZED_DEED)}
        label="Savoir qui a le droit de consulter un acte notarié"
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
