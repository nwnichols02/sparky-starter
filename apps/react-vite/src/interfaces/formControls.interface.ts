export interface IFormInputProps {
    validate?: (v: string) => boolean;
    validateOnTheFly?: boolean;
    maxLength?: number;
    minLength?: number;
    min?: string | number;
    max?: string | number;
    label?: any;
    required?: boolean;
}
