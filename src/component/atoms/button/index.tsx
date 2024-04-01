import Button from '@mui/material/Button';
import { Props } from './interface';

const CustomButton: React.FC<Props> = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  label  
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
