import { Footer } from '@locadocs/design-system/components/Footer';
import * as ROUTES from '@constants/routes';

export const WebFooter: React.FC<unknown> = (): JSX.Element => {
  return (
    <Footer
      links={[
        {
          label: 'Mentions légales',
          href: ROUTES.ABOUT,
        },
        {
          label: 'Données personnelles et cookies',
          href: ROUTES.PERSONNAL_DATA,
        },
        {
          label: 'Accessibilité : non conforme',
          href: ROUTES.ACCESSIBILITE,
        },
      ]}
    />
  );
};
