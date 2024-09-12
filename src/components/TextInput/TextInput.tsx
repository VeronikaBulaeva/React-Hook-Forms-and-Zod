import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { InputType } from '@/components/types.ts';

const TextInput = ({ ...props }: InputType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <TextField
            {...field}
            label={props.label}
            type="text"
            required={props.required}
            disabled={props.disabled}
            placeholder={props.placeholder}
            error={Boolean(error)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {error ? (
            <FormHelperText
              sx={{
                color: 'error.main',
              }}
            >
              {error.message}
            </FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};

export default TextInput;
