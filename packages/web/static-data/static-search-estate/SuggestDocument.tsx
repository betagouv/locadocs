import { useRouter } from 'next/router';
import { Input } from '@locadocs/design-system/components/Input';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';

export const SuggestDocument = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
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

      <Input
        isTextArea
        inputProps={{ placeholder: 'Je souhaite accéder à....' }}
        label="Votre suggestion"
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
