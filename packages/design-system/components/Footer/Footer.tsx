import Link from 'next/link';
import { Container } from './FooterStyles';

type TFooter = {
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const Footer: React.FC<TFooter> = ({ links }: TFooter): JSX.Element => {
  return (
    <Container>
      <section>
        <div>
          <p>
            République
            <br />
            Française
          </p>
        </div>

        <ul>
          <li>
            <a href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
          </li>
          <li>
            <a href="https://gouvernement.fr">gouvernement.fr</a>
          </li>
          <li>
            <a href="https://service-public.fr">service-public.fr</a>
          </li>
          <li>
            <a href="https://data.gouv.fr">data.gouv.fr</a>
          </li>
        </ul>
      </section>

      {links && links.length > 0 && (
        <section>
          {links.map(link => (
            <Link key={link.label} href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </section>
      )}
    </Container>
  );
};
