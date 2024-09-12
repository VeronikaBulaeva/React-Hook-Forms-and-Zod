import {FormControl, Typography} from '@mui/material';
import {FlexBox, FlexCheckBox, FormBox, GridContainer} from '@/components/style.tsx';
import {useFormContext} from 'react-hook-form';
import TextInput from '@/components/TextInput/TextInput.tsx';
import PhoneInput from '@/components/PhoneInput/PhoneInput.tsx';
import CheckBoxField from '@/components/CheckBox/CheckBox.tsx';

const UserForm = () => {
  const {
    formState: {isSubmitSuccessful: disabled},
  } = useFormContext();

  return (
    <FormBox>
      <FormControl fullWidth>
        <GridContainer>
          <Typography variant="h1" color="text.primary">
            Общая информация
          </Typography>
          <FlexBox>
            <TextInput
              required
              label="Фамилия"
              name="surname"
              placeholder="Иванов"
              disabled={disabled}
            />
            <TextInput
              required
              label="Имя"
              name="name"
              placeholder="Иван"
              disabled={disabled}
            />
            <TextInput
              required={false}
              label="Отчество"
              name="lastName"
              placeholder="Иванович"
              disabled={disabled}
            />
          </FlexBox>
          <Typography variant="h1" color="text.primary">
            Контакты
          </Typography>
          <FlexBox>
            <PhoneInput
              label="Телефон"
              name="phone"
              placeholder="+7 (999) 999 99 99"
              disabled={disabled}/>
            <TextInput
              required={false}
              label="E-mail"
              name="email"
              placeholder="E-mail"
              disabled={disabled}
            />
          </FlexBox>
          <Typography variant="h1" color="text.primary">
            Другоe
          </Typography>
          <FlexCheckBox>
            <CheckBoxField disabled={disabled} name="checkbox" text="За любой движ" required/>
          </FlexCheckBox>
        </GridContainer>
      </FormControl>
    </FormBox>
  );
};

export default UserForm;
