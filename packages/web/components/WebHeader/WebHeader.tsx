import React from 'react';
import * as LABELS from '@constants/labels';
import { Header } from '@locadocs/design-system/components/Header';

export const WebHeader: React.FC<unknown> = (): JSX.Element => (
  <Header title={LABELS.SITE_TITLE} baseLine={LABELS.SITE_BASELINE} />
);
