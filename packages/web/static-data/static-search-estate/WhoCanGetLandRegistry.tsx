import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
// import { routes } from './index';

export const WhoCanGetLandRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Qui peut consulter le cadastre&nbsp;?</TITLES.H1>

      <p>Les plans sont librement communicables.</p>
      <p>
        Les matrices cadastrales (registres des propriétaires) sont librement
        communicables au-delà d'un délai de 50 ans. Avant l'échéance du délai de
        50 ans&nbsp;:
      </p>

      <ul>
        <li>Le propriétaire peut demander les relevés de ses propriétés.</li>
        <li>
          Les tiers peuvent obtenir la communication ponctuelle d’extraits
          d’informations cadastrales concernant des parcelles déterminées.
        </li>
      </ul>

      <div className="spacer" />

      <p>
        <strong>Que souhaitez-vous faire&nbsp;?</strong>
      </p>

      <div className="spacer" />

      <Link
        href={buildRoute('')}
        label="Consulter un plan cadastral"
        kind={ELinkKind.SECONDARY}
      />
      <Link
        href={buildRoute('')}
        label="Consulter la documentation cadastrale écrite"
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
