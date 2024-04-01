import { Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';

// Adjust the return type to directly match CSSObject expectations
const useStyles = (styles: (theme: Theme) => CSSObject) => {
    return (theme: Theme): CSSObject => styles(theme);
  }

export default useStyles;
