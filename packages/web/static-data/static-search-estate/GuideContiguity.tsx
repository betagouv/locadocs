import { useRouter } from 'next/router';
import { ELinkKind, Link } from '@locadocs/design-system/components/Link';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { routes } from '.';

export const GuideContiguity = (root: string): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>
        Je cherche des informations sur la mitoyenneté d'un mur
      </TITLES.H1>

      <p>
        Un mur mitoyen est un mur commun entre deux voisins qui en partagent la
        propriété.
      </p>

      <p>
        L'absence de mitoyenneté d'un mur peut être mentionnée dans le titre de
        propriété du bien.
      </p>
      <p>
        Il n'existe aucune administration publique chargée de recenser les
        mitoyennetés. Cette information ne figure pas dans le cadastre.
      </p>

      <div className="spacer" />
      <Link
        href={`${root}/${routes.GUIDE_PROPERTY_DEED}`}
        label="Chercher un titre de propriété"
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
