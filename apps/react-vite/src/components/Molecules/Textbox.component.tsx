import { useFormContext } from "react-hook-form";
import FormControl from "@/components/Atoms/FormControl.component";
import TextField, {
    ITextFieldProps,
} from "@/components/Atoms/TextField.component";
import { forwardRef } from "react";
import { IFormInputProps } from "@/interfaces/formControls.interface";

interface IProps extends ITextFieldProps, Omit<IFormInputProps, "label"> {}

const TextBox = forwardRef((props: IProps, ref: any) => {
    const { register, formState, setValue } = useFormContext();
    const isDate = props.type === "date" || props.type === "datetime-local";
    const isInvalid: boolean = props.validateOnTheFly
        ? !!formState.errors[props.id]
        : !!(formState.isSubmitted && formState.errors[props.id]);

    const {
        validateOnTheFly,
        min,
        max,
        minLength,
        maxLength,
        validate,
        ...textFieldProps
    } = props;

    return (
        <FormControl>
            <TextField
                variant="standard"
                {...textFieldProps}
                {...register(props.id, {
                    required: props.required,
                    valueAsDate: isDate,
                    shouldUnregister: true,
                    validate: (v: any) => {
                        const customValidation = validate ? validate(v) : true;
                        let datePassed = true;
                        if (isDate && props.required) {
                            const dateVal = new Date(v);
                            datePassed = !isNaN(dateVal.getTime());
                        }
                        return datePassed && customValidation;
                    },
                    min: props.min,
                    max: props.max,
                    minLength: props.minLength,
                    maxLength: props.maxLength,
                    onChange: (e) => setValue(props.id, e.target.value),
                })}
                ref={ref}
                aria-invalid={isInvalid ? "true" : "false"}
                error={isInvalid}
                name={props.id}
                id={props.id}
            />
        </FormControl>
    );
});

export default TextBox;
