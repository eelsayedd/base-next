import { useTheme, Theme, SxProps } from '@mui/material/styles';

const useStyles = <T extends Record<string, SxProps<Theme>>>(stylesFn: (theme: Theme) => T) => {
  // Automatically use the theme from the context
  const theme = useTheme();
  // Return the styles object directly, without needing the theme as a parameter
  return stylesFn(theme);
};

export default useStyles;
