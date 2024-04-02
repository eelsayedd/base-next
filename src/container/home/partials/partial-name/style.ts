import { Theme, CSSObject } from '@mui/material/styles';

export const componentStyles = (theme: Theme): Record<string, CSSObject> => ({
  container: {
    display: 'flex',
    gap: 2,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      height: 'auto',
      width: 'auto',
    },
    // Ensure any dynamic keys or nested styles also conform to CSSObject or are properly typed
  },
  // Define other styles as needed
});
