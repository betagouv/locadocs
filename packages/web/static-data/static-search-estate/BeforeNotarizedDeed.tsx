import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from './index';

export const BeforeNotarizedDeed = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Que souhaitez-vous faire ?</TITLES.H1>

      <Link
        href={`${root}`}
        label="Consulter un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.NOTARIZED_DEED_INFOS}`}
        label="Avoir plus d'informations sur le contenu d'un acte notarié"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={`${root}/${routes.WHO_CAN_GET_NOTARIZED_DEED}`}
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
