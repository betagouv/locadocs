import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { resultRoutes, routes } from './index';
import { BreadCrump } from '@components/BreadCrump';
import { Questionnaire } from '@components/Questionnaire';

export const InfosLandRegistry = (
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
            label: 'le cadastre',
            href: buildRoute(routes.BEFORE_LAND_REGISTRY),
          },
          { label: 'que contient le cadastre ?' },
        ]}
      />

      <TITLES.H1>Que contient le cadastre&nbsp;?</TITLES.H1>

      <div className="innerContainer">
        <p>
          Le cadastre est un document tenu par l'administration fiscale pour
          servir à la répartition de l'impôt foncier.
        </p>
        <p>Il est constitué&nbsp;:</p>
        <ul>
          <li>
            De plans qui représentent l'emplacement des parcelles sur le
            territoire d'une commune.
          </li>
          <li>
            De registres et de fichiers (états de section et matrices) qui
            indiquent&nbsp;:
          </li>
          <ul>
            <li>Le nom du propriétaire d'une parcelle, bâtie ou non bâtie.</li>
            <li>
              Les dates d'entée et de sortie de la parcelle dans son patrimoine.
            </li>
            <li>
              L’emplacement et la nature de la parcelle (maison, jardin, pâture,
              cour, sol, bois, terre…).
            </li>
            <li>Sa superficie.</li>
            <li>
              Les modifications apportées à la parcelle (notamment en cas de
              construction nouvelle).
            </li>
            <li>
              Le renvoi vers le propriétaire précédent et le propriétaire
              suivant.
            </li>
          </ul>
        </ul>
        <TITLES.H2>Quelle période couvre le cadastre&nbsp;?</TITLES.H2>
        <p>
          Le premier cadastre, appelé "napoléonien", a été réalisé, suivant les
          communes, entre 1808 et 1850.
        </p>
        <p>
          Les documents cadastraux ont fait l'objet d'une révision à partir de
          1930 (cadastre dit "rénové").
        </p>
        <TITLES.H2>Que ne contient pas le cadastre&nbsp;?</TITLES.H2>
        <p>
          Document créé dans un but fiscal, le cadastre ne permet pas&nbsp;:
        </p>
        <ul>
          <li>
            de prouver une servitude (droit de passages, accès, mitoyenneté,
            servitude de vue, de hauteur, etc.)&nbsp;: cette information ne peut
            se trouver que dans un acte notarié ;
          </li>
          <li>d'apporter la preuve d'une propriété ;</li>
          <li>
            de connaître le descriptif d’une maison, son plan, ou ses
            dimensions.
          </li>
        </ul>
        <p>
          Entre la création du cadastre et jusqu'à sa rénovation, les plans
          n'ont pas été mis à jour. Aucune évolution des limites entre parcelles
          n'y est donc reportée.
        </p>

        <p>
          <strong>
            Souhaitez-vous poursuivre votre recherche de cadastre&nbsp;?
          </strong>
        </p>
      </div>

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY,
        )}
        label="Oui, je souhaite consulter un plan cadastral"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_LAND_REGISTRY_DOC}/${inseeCode}`
            : routes.SELECT_CITY_LAND_REGISTRY_DOC,
        )}
        label="Oui, je souhaite consulter la documentation cadastrale écrite"
        kind={ELinkKind.PRIMARY}
        leftIcon={mdiArrowRight}
      />

      <Link
        href={buildRoute(routes.DEAD_END)}
        label="Non, ces documents ne correspondent pas à ma recherche"
        kind={ELinkKind.SECONDARY}
      />

      <Button
        onClick={() => router.back()}
        leftIcon={mdiArrowLeft}
        kind={EButtonKind.TERTIARY}
      />

      <Questionnaire page="infos-land-registry" />
    </>
  );
};
