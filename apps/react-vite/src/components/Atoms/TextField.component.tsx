import {
    default as MuiTextField,
    TextFieldProps,
} from "@mui/material/TextField";

export interface ITextFieldProps extends Omit<TextFieldProps, ""> {
    id: string; //? Makes the id field required
}

const TextField = (props: ITextFieldProps) => {
    return <MuiTextField {...props} />;
};

export default TextField;
