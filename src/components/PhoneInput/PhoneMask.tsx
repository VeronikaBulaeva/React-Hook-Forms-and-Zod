import {IMaskInput} from 'react-imask';
import {forwardRef} from 'react';

interface PhoneMaskProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const PhoneMask = forwardRef<HTMLInputElement, PhoneMaskProps>((props, ref) => {
  const {onChange, ...other} = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (900) 000 00 00"
      inputRef={ref}
      onAccept={(value: string) => onChange({target: {name: props.name, value}})}
      overwrite
    />
  );
});

PhoneMask.displayName = 'PhoneMask';
export default PhoneMask
