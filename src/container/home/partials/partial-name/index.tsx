  import { Props } from './interface';
  import { FC } from 'react';
  import {CustomButton,Typography} from '@atoms';
  import { useTranslation } from 'react-i18next';
  import useLanguage from '@/hooks/useLangauge';
  import { componentStyles } from './style';
  import useStyles from '@/hooks/useStyles';
  import { Box } from '@mui/material';

  const PartialName: FC<Props> = ({ changeTest }) => {
    const {t}= useTranslation()
    const {language ,changeLanguage}=useLanguage()
    const styles = useStyles(componentStyles);

    return (
      <Box sx={styles.container}>
        <Typography variant='h6'  component={'p'} >{t('welcome')} {language}</Typography>
        <CustomButton label='Change Test' onClick={() => changeTest(2)} />
        <CustomButton label='Change Arabic' onClick={() => changeLanguage('ar')} />
        <CustomButton label='Change English' onClick={() => changeLanguage('en')} />
      </Box>
    );
  };

  export default PartialName;
