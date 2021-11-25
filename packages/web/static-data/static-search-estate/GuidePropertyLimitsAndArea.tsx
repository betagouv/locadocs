import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const GuidePropertyLimitsAndArea = (
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
          {
            label: 'les limites d’une propriété ou la superficie d’un terrain',
          },
        ]}
      />

      <TITLES.H1>
        Je cherche les limites d'une propriété ou la superficie d'un terrain
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          La délimitation d'une propriété est réalisée par un géomètre expert
          qui dresse un procès-verbal de bornage. Cette opération n'est pas
          obligatoire. Le procès-verbal de bornage peut être joint à{' '}
          <strong>l'acte notarié</strong> au moment de la vente de la propriété.
        </p>

        <p>
          Il est également possible de se tourner vers le géomètre-expert, qui a
          l'obligation de conserver les documents qu'il produit, ou à défaut
          vers le Conseil régional de l'ordre des géomètres-experts.
        </p>

        <p>
          Le <strong>cadastre</strong> donne une représentation topographique
          des limites de la parcelle et indique sa superficie. En cas de litige,
          il ne peut servir de preuve devant la justice. Il peut toutefois
          permettre de constituer un faisceau de présomptions, d’autant que
          depuis 1955 toute modification de limites de propriété dans le
          cadastre doit être constatée par un document d’arpentage, conservé
          dans la documentation cadastrale.
        </p>
      </div>

      <Link
        href={buildRoute(routes.BEFORE_NOTARIZED_DEED)}
        label="Les actes notariés"
        kind={ELinkKind.SECONDARY}
      />

      <Link
        href={buildRoute(routes.BEFORE_LAND_REGISTRY)}
        label="Le cadastre"
        kind={ELinkKind.SECONDARY}
      />

      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />

      <Questionnaire page="guide-property-limits-and-area" />
    </>
  );
};
