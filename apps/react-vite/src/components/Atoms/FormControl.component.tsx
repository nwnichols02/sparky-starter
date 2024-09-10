import {
    default as MuiFormControl,
    FormControlProps,
} from "@mui/material/FormControl";

interface IProps extends FormControlProps {}

const FormControl = (props: IProps) => {
    return <MuiFormControl {...props} />;
};

export default FormControl;
