
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import useHomeHook from './hooks/useHomeHook';
import PartialName from './partials/partial-name';
import { Main } from './style';
import {Typography} from '@atoms'
import { useTranslation } from 'react-i18next';

const HomeContainer = () => {
  const test = useSelector((state: RootState) => state.boot.test);
  const { changeTest } = useHomeHook();
  const {t}=useTranslation()
  return (
    <Main>
      <Typography variant='h2' component={'h1'}> {t('welcome')}</Typography>
      <Typography variant='h3' component={'h3'}> Test  {test}</Typography>

      <PartialName changeTest={changeTest  as (number: number) => unknown } />
    </Main>
  );
};

export default HomeContainer;
