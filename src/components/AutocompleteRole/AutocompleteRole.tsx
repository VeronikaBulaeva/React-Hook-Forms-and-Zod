import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { OptionsInputType } from '@/components/types.ts';

const AutocompleteRole = ({ ...props }: OptionsInputType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <Autocomplete
            disablePortal
            options={props.options}
            disabled={props.disabled}
            onChange={(_event: unknown, item: string | null) => {
              field.onChange(item);
            }}
            value={field.value as string}
            renderInput={(params) => (
              <TextField
                {...params}
                {...field}
                label={props.label}
                required={props.required}
                disabled={props.disabled}
                error={Boolean(error)}
                placeholder={props.placeholder}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
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

export default AutocompleteRole;
