import React from 'react';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Link } from '@locadocs/design-system/components/Link';
import { Container } from './Home.styled';
import { mdiArrowRight } from '@mdi/js';
import * as ROUTES from '@constants/routes';

export const Home: React.FC<unknown> = (): JSX.Element => {
  return (
    <Container>
      <header>
        <div>
          <div>
            <TITLE.H1>
              Vous cherchez un document ou une information sur un terrain, une
              maison ou un immeuble&nbsp;?
            </TITLE.H1>

            <Link
              label="Je commence ma recherche"
              href={ROUTES.ESTATE}
              leftIcon={mdiArrowRight}
            />
          </div>

          <img
            src="/imgs/home_1.png"
            alt="woman searching for a file"
            width="640"
            height="360"
          />
        </div>
      </header>

      <section className="info">
        <div>
          <span>Comment</span>
          <span>ça marche&nbsp;?</span>
        </div>

        <div>
          <strong>Trouver un document</strong> détenu par l'administration
          relève parfois du parcours du combattant&nbsp;!{' '}
          <strong>Loc@docs</strong> est un guide en ligne qui facilite vos
          recherches de{' '}
          <strong>documents concernant les biens immobiliers</strong>. Il vous
          aide en quelques clics à savoir:
        </div>
      </section>

      <section className="genericQuestions">
        <img
          src="/imgs/home_2.png"
          alt="man looking at a big question mark"
          width="640"
          height="360"
        />
        <p>
          1. Quel document administratif contient l'information que je
          cherche&nbsp;?
        </p>
      </section>

      <section className="genericQuestions">
        <p>2. Où se trouve ce document et comment faire ma demande&nbsp;?</p>
        <img
          src="/imgs/home_3.png"
          alt="man typing on a laptop"
          width="600"
          height="700"
        />
      </section>

      <section className="bulletPoints">
        <div>
          <span>📑</span>
          <p>
            Vous cherchez un permis de construire&nbsp;? Un acte de vente&nbsp;?
          </p>
        </div>

        <div>
          <span>📍</span>
          <p>Vous voulez connaître les limites d'une propriété&nbsp;?</p>
        </div>

        <div>
          <span>🏠</span>
          <p>
            Vous cherchez une information sur la mitoyenneté d'un mur&nbsp;?
          </p>
        </div>
      </section>

      <section className="cta">
        <Link
          label="Je commence ma recherche"
          href={ROUTES.ESTATE}
          leftIcon={mdiArrowRight}
        />
      </section>

      <section className="info">
        <div>
          <span>Que trouverez-vous dans</span>
          <span>Loc@docs</span>
        </div>

        <div>
          <strong>Le contenu et le lieu de conservation :</strong>
          <ul>
            <li>d’un permis de construire</li>
            <li>du cadastre</li>
            <li>d’un registre des hypothèques</li>
            <li>
              d’un acte notarié (actes de vente, contrats de donation,
              testaments, etc)
            </li>
          </ul>
        </div>
      </section>

      <section className="info">
        <div>
          <span>A propos de</span>
          <span>Loc@docs</span>
        </div>

        <div>
          Loc@docs est un projet porté par le{' '}
          <a
            href="https://francearchives.fr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Service interministériel des Archives de France
          </a>{' '}
          (ministère de la culture) actuellement en phase d'expérimentation. Il
          est accompagné par l'Atelier numérique, l'incubateur du ministère de
          la culture, et s'inscrit dans le cadre du programme interministériel
          <a
            href="https://beta.gouv.fr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            beta.gouv.fr
          </a>
          , qui soutient les administrations publiques dans la construction de
          services numériques utiles, simples, faciles à utiliser.
        </div>
      </section>

      <section className="contact">
        <a href="mailto:locadocs@beta.gouv.fr">Nous contacter</a>
      </section>
    </Container>
  );
};
