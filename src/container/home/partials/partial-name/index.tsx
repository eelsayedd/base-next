  import { RootState } from '@/store';
  import { useSelector } from 'react-redux';
  import { Props } from './interface';
  import { FC } from 'react';

  import {CustomButton} from '@atoms';
  import { useTranslation } from 'react-i18next';
  import useLanguage from '@/hooks/useLangauge';
  // import { componentStyles } from './style';
  // import useStyles from '@/hooks/useStyles';
  // import { Theme,useTheme } from '@mui/material/styles';
  import { Box } from '@mui/material';

  const PartialName: FC<Props> = ({ changeTest }) => {
    const {t}= useTranslation()
    const count = useSelector((state: RootState) => state.boot.lng);
    const {language ,changeLanguage}=useLanguage()
    // const theme: Theme = useTheme(); // Explicitly typing theme here for clarity
    // const styles = useStyles(componentStyles)(theme);
          // <Box sx={styles.container}>
    return (
      <Box>
        <p>{t('welcome')} {language}</p>
        <p> Number {count}</p>
        <CustomButton label='Change Test' onClick={() => changeTest(2)} />
        <CustomButton label='Change Arabic' onClick={() => changeLanguage('ar')} />
        <CustomButton label='Change English' onClick={() => changeLanguage('en')} />
      </Box>
    );
  };

  export default PartialName;
