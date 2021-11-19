import { useRouter } from 'next/router';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { Suggestion } from '@components/Suggestion';
import { BreadCrump } from '@components/BreadCrump';
import { routes } from './index';

export const SuggestDocument = (
  buildRoute: (route: string) => string,
): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <BreadCrump
        steps={[
          { label: 'commencer ma recherche', href: buildRoute(routes.ROOT) },
          {
            label: 'quel document cherchez-vous ?',
            href: buildRoute(routes.DOCUMENT_CHOICE),
          },
          { label: 'mon document n’est pas dans la liste' },
        ]}
      />

      <TITLES.H1>Mon document n'est pas dans la liste</TITLES.H1>

      <div className="innerContainer">
        <p>
          Notre liste de documents n'est pas exhaustive, mais nous travaillons à
          l'enrichir progressivement en nous appuyant sur les retours des
          usagers.
        </p>

        <p>
          Souhaitez-vous nous suggérer une nouvelle typologie de documents à
          laquelle nous n'aurions pas pensé ?
        </p>
      </div>

      <Suggestion
        page={'dead-end'}
        placeholder="Je souhaite accéder à..."
        label="Quel document cherchez-vous ?"
        actionLabel="Envoyer ma suggestion"
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
