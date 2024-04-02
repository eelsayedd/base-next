import React from 'react';
import MUITypography from '@mui/material/Typography';
import { Props } from './interface';

const Typography: React.FC<Props> = (props) => {
    // Now `component` is a required prop, and TypeScript will enforce it.
    return (
        <MUITypography {...props}/>
    );
};

export default Typography;
