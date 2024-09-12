import { Checkbox, FormControl, FormHelperText, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { InputType } from '@/components/types.ts';

const CheckBoxField = ({ name, disabled, text, required }: InputType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <Typography variant="h1" color="text.primary">
            <Checkbox
              {...field}
              value={field.value}
              checked={field.value}
              onChange={(e) => {
                field.onChange(e.target.checked);
              }}
              required={required}
              disabled={disabled}
            />
            {text}
          </Typography>
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

export default CheckBoxField;
