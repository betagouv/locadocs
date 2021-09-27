import React from 'react';
import Icon from '@mdi/react';
import { mdiAlertOutline, mdiCheckCircleOutline } from '@mdi/js';

import { Container } from './Input.styled';
import { computeClassnames } from '../../utils/computeClassnames';

type IInput = {
  className?: string;
  error?: string;
  id?: string;
  inputProps?: React.HTMLProps<HTMLTextAreaElement | HTMLInputElement>;
  isTextArea?: boolean;
  label?: string;
  subLabel?: string;
  success?: string;
};

let counter = 0;

export const Input: React.FC<IInput> = ({
  className,
  error,
  id,
  inputProps,
  isTextArea,
  label,
  subLabel,
  success,
}: IInput): JSX.Element => {
  const computedClassName = computeClassnames([
    className,
    success ? 'success' : '',
    error ? 'error' : '',
  ]);
  counter++;
  const localId = `input-component-${counter}`;

  return (
    <Container id={id} className={computedClassName}>
      {label && (
        <label htmlFor={localId}>
          {label}
          {subLabel && <span>{subLabel}</span>}
        </label>
      )}

      {isTextArea ? (
        <textarea
          {...(inputProps as React.HTMLProps<HTMLTextAreaElement>)}
          id={localId}
        ></textarea>
      ) : (
        <input
          {...(inputProps as React.HTMLProps<HTMLInputElement>)}
          id={localId}
        />
      )}

      {success && (
        <p className="success">
          <Icon path={mdiCheckCircleOutline} />
          {success}
        </p>
      )}

      {error && (
        <p className="error">
          <Icon path={mdiAlertOutline} />
          {error}
        </p>
      )}
    </Container>
  );
};
