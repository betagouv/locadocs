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
} from '@mdi/js';
import { Loader } from '@locadocs/design-system/components/Loader';

type TProps = {
  origin: string;
};

export const Questionnaire: React.FC<TProps> = ({
  origin,
}: TProps): JSX.Element => {
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const [hasAnswered, setHasAnswered] = React.useState<boolean>(false);

  const saveNPS = async (value: number) => {
    setIsSaving(true);
    await fetch(`/api/nps-vote`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value, origin }),
    });
    setIsSaving(false);
    setHasAnswered(true);
  };

  const saveSatisfaction = async (value: number) => {
    setIsSaving(true);
    await fetch(`/api/satisfaction-vote`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value, origin }),
    });
    setIsSaving(false);
    setHasAnswered(true);
  };

  return (
    <Container>
      <div className="nps">
        {isSaving && <Loader />}

        {!isSaving && hasAnswered && <p>Merci pour votre réponse.</p>}

        {!isSaving && !hasAnswered && (
          <>
            <TITLES.H6>
              Suite à votre expérience, quelle est la probabilité que vous
              recommandiez notre service à un ami ou un collègue.
            </TITLES.H6>

            <div>
              <div>
                <span>peu probable</span>
                <span>fort probable</span>
              </div>
              <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                  <button key={number} onClick={() => saveNPS(number)}>
                    {number}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="satisfaction">
        {isSaving && <Loader />}

        {!isSaving && hasAnswered && <p>Merci pour votre réponse.</p>}

        {!isSaving && !hasAnswered && (
          <>
            <TITLES.H6>
              Votre expérience a-t-elle été satisfaisante&nbsp;?
            </TITLES.H6>

            <div>
              {[
                [mdiEmoticonAngryOutline, COLORS.ERROR],
                [mdiEmoticonNeutralOutline, COLORS.ORANGE_DARK],
                [mdiEmoticonHappyOutline, COLORS.GREEN_LIGHT],
                [mdiEmoticonExcitedOutline, COLORS.SUCCESS],
              ].map(([icon, color], index) => (
                <button key={index} onClick={() => saveSatisfaction(index)}>
                  <Icon path={icon} color={color} />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};
