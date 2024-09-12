import { InputType } from '@/components/types.ts';
import { FormControl, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';

const DatePickerForm = ({ ...props }: InputType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <DatePicker
            {...field}
            value={field?.value ?? null}
            label={props.label}
            disabled={props.disabled}
            format="DD.MM.YYYY"
            slotProps={{
              textField: {
                required: props.required,
                placeholder: 'дд.мм.гггг',
                InputLabelProps: { shrink: true },
                error: Boolean(error),
              },
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

export default DatePickerForm;
