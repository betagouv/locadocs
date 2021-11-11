import { useRouter } from 'next/router';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { Suggestion } from '@components/Suggestion';

export const GuideOther = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Ma question n'est pas dans la liste</TITLES.H1>

      <div className="innerContainer">
        <p>
          Notre liste de questions n'est pas exhaustive, mais nous travaillons à
          l'enrichir progressivement en nous appuyant sur les retours des
          usagers.
        </p>

        <p>
          Souhaitez-vous nous suggérer une nouvelle question à laquelle nous
          n'aurions pas pensé ?
        </p>
      </div>

      <Suggestion
        page={'guide-other'}
        placeholder="Je souhaite savoir..."
        label="Ma question"
        actionLabel="Envoyer ma question"
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
