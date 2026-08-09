import { Button } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";

export function FormButton({ children }: PropsWithChildren) {
    const { formState: { isLoading, isSubmitting } } = useFormContext()

    return (
        <Button fullWidth={false} disabled={isLoading || isSubmitting} type='submit'>{children}</Button>
    )
}