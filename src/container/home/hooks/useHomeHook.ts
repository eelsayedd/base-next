import { useDispatch } from 'react-redux';
import { setTest } from '@/store/features/bootSlice';
const useHomeHook = () => {
  const dispatch = useDispatch();

  const changeTest = (number: never) => {
    dispatch(setTest(number));
  };

  return { changeTest };
};

export default useHomeHook;
