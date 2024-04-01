
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import useHomeHook from './hooks/useHomeHook';
import PartialName from './partials/partial-name';

const HomeContainer = () => {
  const test = useSelector((state: RootState) => state.boot.test);
  const { changeTest } = useHomeHook();

  return (
    <>
      <h1> Hello {test}</h1>
      <PartialName changeTest={changeTest  as (number: number) => unknown } />
    </>
  );
};

export default HomeContainer;
