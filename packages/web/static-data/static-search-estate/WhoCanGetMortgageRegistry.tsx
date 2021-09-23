import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
// import { routes } from './index';

export const WhoCanGetMortgageRegistry = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Qui peut consulter un acte notarié&nbsp;?</TITLES.H1>

      <p>
        Les registres et minutes de notaires sont librement communicables à tous
        au-delà d'un délai de 75 ans.
      </p>

      <p>Avant l'échéance du délai de 75 ans&nbsp;:</p>
      <ul>
        <li>
          Les parties ainsi que leurs héritiers et ayants droit ont accès à
          l'acte de vente.
        </li>

        <li>Les tiers peuvent demander un accès anticipé par dérogation.</li>
      </ul>

      <div className="spacer" />
      <Link
        href={`${root}`}
        label="Je souhaite consulter un acte notarié"
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
