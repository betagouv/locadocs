import { useRouter } from 'next/router';
import { SiteLayout } from '@components/Layouts';
import { StaticData } from '@views/StaticData';
import { Button, EButtonKind } from '@locadocs/design-system/components/Button';
import * as TITLES from '@locadocs/design-system/components/Title';
import { mdiArrowLeft } from '@mdi/js';
import { GLOBALS } from '../../../static-data/static-search-estate';

const ResultBuildingPermit = (): JSX.Element => {
  const router = useRouter();
  // const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <SiteLayout>
      <StaticData baseLine={GLOBALS.baseLine}>
        <TITLES.H1>Permis de construire pour...</TITLES.H1>

        {router.query.inseeCode}

        <Button
          onClick={() => router.back()}
          leftIcon={mdiArrowLeft}
          kind={EButtonKind.TERTIARY}
        />
      </StaticData>
    </SiteLayout>
  );
};

export default ResultBuildingPermit;
