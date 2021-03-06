import React from 'react';
import { Container } from './Questionnaire.styled';
import * as TITLES from '@locadocs/design-system/components/Title';
import Icon from '@mdi/react';
import * as COLORS from '@locadocs/design-system/constants/colors';
import {
  mdiEmoticonAngryOutline,
  mdiEmoticonExcitedOutline,
  mdiEmoticonHappyOutline,
  mdiEmoticonNeutralOutline,
  mdiSend,
} from '@mdi/js';
import { Loader } from '@locadocs/design-system/components/Loader';
import { Input } from '@locadocs/design-system/components/Input';
import { Button } from '@locadocs/design-system/components/Button';

type TProps = {
  page: string;
  params?: Record<string, string>;
};

export const Questionnaire: React.FC<TProps> = ({
  page,
  params = {},
}: TProps): JSX.Element => {
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [hasAnswered, setHasAnswered] = React.useState<boolean>(false);
  const [hasSendComment, setHasSendComment] = React.useState<boolean>(false);
  const [isSubmittingComment, setIsSubmittingComment] =
    React.useState<boolean>(false);

  const saveSatisfaction = async (value: number) => {
    setIsSaving(true);
    await fetch(`/api/satisfaction-vote`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value, page, params }),
    });
    setIsSaving(false);
    setHasAnswered(true);
  };

  const sendComment = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const comment = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (event.currentTarget.elements[1] as HTMLInputElement).value;

    if (comment === '') {
      return;
    }

    setIsSubmittingComment(true);
    await fetch(`/api/send-suggestion`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment, page, params, email }),
    });
    setIsSubmittingComment(false);
    setHasSendComment(true);
  };

  return (
    <Container>
      {isSaving && <Loader />}

      {!isSaving && !hasAnswered && (
        <>
          <TITLES.H6>Est-ce que Loc@docs vous a ??t?? utile&nbsp;?</TITLES.H6>

          <div className="buttonsContainer">
            {[
              [mdiEmoticonAngryOutline, COLORS.ERROR],
              [mdiEmoticonNeutralOutline, COLORS.ORANGE_DARK],
              [mdiEmoticonHappyOutline, COLORS.GREEN_LIGHT],
              [mdiEmoticonExcitedOutline, COLORS.SUCCESS],
            ].map(([icon, color], index) => (
              <button key={index} onClick={() => saveSatisfaction(index + 1)}>
                <Icon path={icon} color={color} />
              </button>
            ))}
          </div>
        </>
      )}

      {!isSaving && hasAnswered && (
        <>
          <TITLES.H6>Merci pour votre r??ponse.</TITLES.H6>

          <p>
            Vous avez une question, une remarque ou une suggestion
            d'am??lioration de l'outil&nbsp;?
            <br />
            Faites-nous part de votre avis et aidez-nous ?? l'am??liorer.
          </p>

          {!hasSendComment && (
            <form onSubmit={sendComment}>
              <Input
                isTextArea
                inputProps={{
                  placeholder: 'Ce serait mieux si...',
                }}
                label="Vos suggestions"
              />

              <Input
                inputProps={{
                  placeholder: 'ex : nom.prenom@mail.com',
                }}
                label="Votre email"
                subLabel="Si vous souhaitez que nous vous recontactions pour vous aider au mieu"
              />

              <Button
                label="Envoyer mon commentaire"
                leftIcon={mdiSend}
                isLoading={isSubmittingComment}
                type="submit"
              />
            </form>
          )}

          {hasSendComment && <p>Un immense merci pour votre contribution.</p>}
        </>
      )}
    </Container>
  );
};
