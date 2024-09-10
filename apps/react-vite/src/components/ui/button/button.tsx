import React, {forwardRef} from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";

export interface IMuiButtonProps extends MuiButtonProps {
    id: string; 
}

export const Button =((props: IMuiButtonProps) => (
    <MuiButton type="button" {...props} />
));