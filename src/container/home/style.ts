import { styled } from '@mui/material/styles';

export const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  // Additional styles here
}));