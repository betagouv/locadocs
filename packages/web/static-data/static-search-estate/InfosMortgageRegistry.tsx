import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const InfosMortgageRegistry = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <BreadCrump
        steps={[
          { label: 'commencer ma recherche', href: buildRoute(routes.ROOT) },
          {
            label: 'quel document cherchez-vous ?',
            href: buildRoute(routes.DOCUMENT_CHOICE),
          },
          {
            label: 'un registre des hypothèques',
            href: buildRoute(routes.BEFORE_MORTGAGE_REGISTRY),
          },
          { label: 'que contiennent les registres des hypothèques ?' },
        ]}
      />

      <TITLES.H1>
        Que contiennent les registres des hypothèques&nbsp;?
      </TITLES.H1>

      <div className="innerContainer">
        <p>
          Les registres des hypothèques contiennent les transcriptions,
          c'est-à-dire la copie intégrale, des actes de vente des biens
          immobiliers passés devant notaire.
        </p>

        <p>L'acte de vente passé devant le notaire contient&nbsp;:</p>

        <ul>
          <li>la date de l’acte ;</li>
          <li>le nom et le lieu de résidence du notaire ;</li>
          <li>le nom du vendeur et de l'acquéreur ;</li>
          <li>la description et la localisation du bien ;</li>
          <li>
            l’origine de la propriété du bien vendu&nbsp;: le nom du précédent
            vendeur, le nom et le lieu de résidence du notaire devant lequel a
            été passé l'acte précédent ainsi que la date de cet acte ;
          </li>
          <li>éventuellement, la présence de servitudes.</li>
        </ul>

        <TITLES.H2>
          De quand datent les registres des hypothèques&nbsp;?
        </TITLES.H2>
        <p>
          Les registres des hypothèques sont tenus depuis 1799 par le service
          fiscal des hypothèques, devenu en 2010 le service de la publicité
          foncière.
        </p>

        <TITLES.H2>
          Que ne contiennent pas les registres des hypothèques ?
        </TITLES.H2>
        <p>
          Les pièces annexées à l'acte notarié ne sont pas transcrites. Vous n'y
          trouverez donc pas les plans, le procès-verbal de bornage, ou encore
          le cahier des charges de copropriété.
        </p>

        <p>
          <strong>
            Souhaitez-vous poursuivre votre recherche de permis de construire?
          </strong>
        </p>
      </div>

      <Questionnaire page="infos-mortgage-registry" />

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_MORTGAGE_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_MORTGAGE_REGISTRY,
        )}
        label="Oui, je souhaite poursuivre"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />

      <Link
        href={buildRoute(routes.DEAD_END)}
        label="Non, ce document ne correspond pas à ma recherche"
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
