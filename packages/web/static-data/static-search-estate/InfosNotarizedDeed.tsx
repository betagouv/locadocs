import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { resultRoutes, routes } from './index';

export const InfosNotarizedDeed = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();
  const { inseeCode } = router.query;

  return (
    <>
      <TITLES.H1>Que contient un acte notarié&nbsp;?</TITLES.H1>

      <p>L'acte de vente passé devant le notaire contient&nbsp;:</p>

      <ul>
        <li>La date de l’acte</li>
        <li>Le nom et le lieu de résidence du notaire</li>
        <li>Le nom du vendeur et de l'acquéreur</li>
        <li>La description et la localisation du bien</li>
        <li>
          L’origine de la propriété du bien vendu&nbsp;: le nom du précédent
          vendeur, le nom et le lieu de résidence du notaire devant lequel a été
          passé l'acte précédent ainsi que la date de cet acte
        </li>
        <li>Éventuellement, la présence de servitudes</li>
        <li>
          Éventuellement, des pièces annexes (plans, procès-verbal de bornage,
          cahier des charges de copropriété, etc.)
        </li>
      </ul>

      <p>
        Lors de la signature d'un acte de vente devant notaire, l'original de
        l'acte, également appelé "minute", est conservé dans les registres de
        l'étude notariale.
      </p>

      <div className="spacer" />

      <p>
        <strong>
          Souhaitez-vous poursuivre votre recherche d'acte notarié ?
        </strong>
      </p>

      <div className="spacer" />

      <Link
        href={buildRoute(
          inseeCode
            ? `${resultRoutes.RESULT_NOTARIZED_DEED}/${inseeCode}`
            : routes.SELECT_CITY_NOTARIZED_DEED,
        )}
        label="Oui, je souhaite poursuivre"
        kind={ELinkKind.SECONDARY}
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
