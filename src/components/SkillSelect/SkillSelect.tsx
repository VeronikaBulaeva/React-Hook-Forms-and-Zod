import { Autocomplete, FormControl, FormHelperText, TextField } from '@mui/material';
import { OptionsInputType } from '@/components/types.ts';
import { Controller, useFormContext } from 'react-hook-form';

const SkillSelect = ({ ...props }: OptionsInputType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <Autocomplete
            multiple
            limitTags={3}
            options={props.options}
            filterSelectedOptions
            disabled={props.disabled}
            autoFocus={false}
            onChange={(_event: unknown, item: string[]) => {
              field.onChange(item);
            }}
            value={field.value as string[]}
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

export default SkillSelect;
