import React from 'react';
import { Container } from './Suggestion.styled';
import { mdiSend } from '@mdi/js';
import { Input } from '@locadocs/design-system/components/Input';
import { Button } from '@locadocs/design-system/components/Button';

type TProps = {
  actionLabel?: string;
  label?: string;
  page: string;
  placeholder?: string;
};

export const Suggestion: React.FC<TProps> = ({
  actionLabel,
  label,
  page,
  placeholder,
}: TProps): JSX.Element => {
  const [hasSendComment, setHasSendComment] = React.useState<boolean>(false);
  const [isSubmittingComment, setIsSubmittingComment] =
    React.useState<boolean>(false);

  const sendComment = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const comment = (event.currentTarget.elements[0] as HTMLInputElement).value;

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
      body: JSON.stringify({ comment, page, params: {} }),
    });
    setIsSubmittingComment(false);
    setHasSendComment(true);
  };

  return (
    <Container>
      {!hasSendComment && (
        <form onSubmit={sendComment}>
          <Input
            isTextArea
            inputProps={{
              placeholder: placeholder || 'Ce serait mieux si...',
            }}
            label={label || 'Vos suggestions'}
          />

          <Button
            label={actionLabel || 'Envoyer mon commentaire'}
            leftIcon={mdiSend}
            isLoading={isSubmittingComment}
            type="submit"
          />
        </form>
      )}

      {hasSendComment && <p>Un immense merci pour votre contribution.</p>}
    </Container>
  );
};
