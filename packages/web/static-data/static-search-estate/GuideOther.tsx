import { useRouter } from 'next/router';
import { Input } from '@locadocs/design-system/components/Input';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';

export const GuideOther = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <TITLES.H1>Ma question n'est pas dans la liste</TITLES.H1>

      <p>
        Notre liste de questions n'est pas exhaustive, mais nous travaillons à
        l'enrichir progressivement en nous appuyant sur les retours des usagers.
      </p>

      <p>
        Souhaitez-vous nous suggérer une nouvelle question à laquelle nous
        n'aurions pas pensé ?
      </p>

      <div className="spacer" />

      <Input
        isTextArea
        inputProps={{ placeholder: 'Je souhaite savoir....' }}
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
