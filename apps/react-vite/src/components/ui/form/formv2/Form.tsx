import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';

interface WithFormProps {
    onSubmit: (data: any) => void;
    schema: ZodType<any, any, any>;
}

export const withForm = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return ({ onSubmit, schema, ...props }: P & WithFormProps) => {
        const methods = useForm({
            resolver: zodResolver(schema),
        });

        return (
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <WrappedComponent {...(props as P)} />
                </form>
            </FormProvider>
        );
    };
};