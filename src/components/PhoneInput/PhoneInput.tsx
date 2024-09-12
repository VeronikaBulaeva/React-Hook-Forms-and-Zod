import {FormControl, FormHelperText, InputBaseComponentProps, TextField} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import {InputType} from '@/components/types.ts';
import TextMaskCustom from '@/components/PhoneInput/PhoneMask.tsx';
import {ElementType} from "react";

const PhoneInput = ({name, label, placeholder, disabled}: InputType) => {
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <FormControl>
          <TextField
            {...field}
            name={name}
            required
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            error={Boolean(error)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{inputComponent: TextMaskCustom as unknown as ElementType<InputBaseComponentProps>}}
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

// const StyledNumberInput = styled(TextField)``;
export default PhoneInput;
