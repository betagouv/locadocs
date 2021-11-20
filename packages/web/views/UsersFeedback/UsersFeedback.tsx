import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { SiteLayout } from '@components/Layouts';
import * as TITLE from '@locadocs/design-system/components/Title';
import { Container } from './UsersFeedback.styles';
import { Loader } from '@locadocs/design-system/components/Loader';

interface IData {
  votesCount: number;
  suggectionsCount: number;
  averageVote: string;
  satisfactionVotes: Array<{
    createdAt: string;
    page: string;
    value: number;
    params: {
      inseeCode: string;
      city: string;
    };
  }>;
  suggestions: Array<{ comment: string; createdAt: string; page: string }>;
}

export const UsersFeedback: React.FC = () => {
  let isMounted = true;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IData>();

  const loadData = async (): Promise<void> => {
    setIsLoading(true);

    const result = await fetch(`/api/get-users-feedback`);
    const { satisfactionVotes, suggestions } = await result.json();

    if (isMounted) {
      const data = {
        votesCount: satisfactionVotes.length,
        suggectionsCount: suggestions.length,
        averageVote:
          (
            satisfactionVotes.reduce(
              (memo: number, vote: { value: number }) => memo + vote.value,
              0,
            ) / satisfactionVotes.length
          ).toFixed(2) + ' / 4',
        satisfactionVotes,
        suggestions,
      };

      setData(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    return (): void => {
      isMounted = false;
    };
  }, []);

  return (
    <SiteLayout>
      <Container>
        {isLoading && <Loader />}

        {!isLoading && data && (
          <>
            <TITLE.H1>Retours utilisateurs</TITLE.H1>

            <TITLE.H2>
              Satisfaction : {data.averageVote} pour {data.votesCount} votes
            </TITLE.H2>

            <table>
              <thead>
                <tr>
                  <td>date</td>
                  <td>vote</td>
                  <td>page</td>
                  <td>params</td>
                </tr>
              </thead>

              <tbody>
                {data.satisfactionVotes.map(vote => (
                  <tr key={vote.createdAt}>
                    <td>{new Date(vote.createdAt).toLocaleDateString()}</td>
                    <td>{vote.value}</td>
                    <td>
                      <NextLink href={`/search-estate/${vote.page}`}>
                        <a href={`/search-estate/${vote.page}`}>{vote.page}</a>
                      </NextLink>
                    </td>
                    <td>
                      {Object.entries(vote.params)
                        .map(([key, value]) => `${key} : ${value}`)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <TITLE.H2>Suggestions : {data.suggectionsCount}</TITLE.H2>

            <table>
              <thead>
                <tr>
                  <td>date</td>
                  <td>suggestion</td>
                  <td>page</td>
                </tr>
              </thead>

              <tbody>
                {data.suggestions.map(suggestion => (
                  <tr key={suggestion.createdAt}>
                    <td>
                      {new Date(suggestion.createdAt).toLocaleDateString()}
                    </td>
                    <td>{suggestion.comment}</td>
                    <td>
                      <NextLink href={`/search-estate/${suggestion.page}`}>
                        <a href={`/search-estate/${suggestion.page}`}>
                          {suggestion.page}
                        </a>
                      </NextLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </Container>
    </SiteLayout>
  );
};
