import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../text-field/TextField';

// ----------------------------------------------------------------------
type TextFieldProps = {
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'placeholder'>;

type Props = TextFieldProps & {
  name: string;
  error?: string;
};

export function RHFTextField({ name, helperText, type, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          // fullWidth
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value));
            } else {
              field.onChange(event.target.value);
            }
          }}
          // error={!!error}
          helperText={error?.message ?? helperText}
          // inputProps={{
          //   autoComplete: 'off',
          // }}
          {...other}
        />
      )}
    />
  );
}
