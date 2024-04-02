import { TypographyProps as MUITypographyProps } from '@mui/material/Typography';

export interface Props extends MUITypographyProps {
  // Making `component` and `variant` explicitly required
  component: React.ElementType;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit';
}
