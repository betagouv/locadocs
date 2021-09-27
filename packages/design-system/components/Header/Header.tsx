import Link from 'next/link';
import { Container } from './Header.styled';

type THeader = {
  baseLine?: string;
  title: string;
};

export const Header: React.FC<THeader> = ({
  baseLine,
  title = 'SET A TITLE',
}: THeader): JSX.Element => {
  return (
    <Container>
      <div>
        <div>
          <p>
            République
            <br />
            Française
          </p>
          <Link href="/">
            <a>
              {title}
              {baseLine && <span>{baseLine}</span>}
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};
