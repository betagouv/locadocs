import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const GuidePropertyDeed = (
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
          { label: 'un titre de propriété' },
        ]}
      />

      <TITLES.H1>Je cherche un titre de propriété</TITLES.H1>

      <div className="innerContainer">
        <p>
          Le titre de propriété est la copie authentique de l'acte de vente
          signé chez le notaire. Il est remis à l'acquéreur d'un bien
          immobilier.
        </p>

        <p>
          En cas de perte d'un titre de propriété, il est possible de retrouver
          <strong>l'acte de vente établi par le notaire</strong>.
        </p>

        <p>
          Les <strong>registres des hypothèques</strong> contiennent une copie
          des actes notariés et peuvent à ce titre pallier le manque ou la perte
          d'un titre de propriété.
        </p>
      </div>

      <Questionnaire page="guide-property-deed" />

      <Link
        href={buildRoute(routes.BEFORE_NOTARIZED_DEED)}
        label="Les actes notariés"
        kind={ELinkKind.SECONDARY}
      />

      <Link
        href={buildRoute(routes.BEFORE_MORTGAGE_REGISTRY)}
        label="Les registres des hypothèques"
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
