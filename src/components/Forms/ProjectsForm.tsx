import { useState } from 'react';
import { Box, Button, FormControl, Typography } from '@mui/material';
import SkillSelect from '@/components/SkillSelect/SkillSelect.tsx';
import { FlexBox, FormBox, GridContainer } from '@/components/style.tsx';
import TextInput from '@/components/TextInput/TextInput.tsx';
import AutocompleteRole from '@/components/AutocompleteRole/AutocompleteRole.tsx';
import DatePickerForm from '@/components/DatePicker/DatePicker.tsx';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useFormContext } from 'react-hook-form';
import { FormFields } from '@/components/schemas/Schemas.ts';
import { Roles, Skills } from '@/constants/constants.ts';

interface ProjectFormType {
  id: number;
  index: number;
  onPressDelete: (index: number) => void;
}

const ProjectsForm = ({ id, index, onPressDelete }: ProjectFormType) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    trigger,
    formState: { isSubmitSuccessful },
  } = useFormContext<FormFields>();

  const onSubmit = async () => {
    const result = await trigger([
      `projects.${index}.projectName`,
      `projects.${index}.skills`,
      `projects.${index}.role`,
      `projects.${index}.beginDate`,
      `projects.${index}.endDate`,
    ]);
    setIsDisabled(result);
  };

  const disabledInput = isDisabled || isSubmitSuccessful;

  return (
    <>
      <FormBox>
        <FormControl fullWidth>
          <GridContainer>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h1" color="text.primary">
                {`Проект №${id}`}
              </Typography>
              {disabledInput ? null : (
                <Button sx={{ justifyContent: 'flex-end' }} onClick={() => onPressDelete(index)}>
                  <DeleteForeverOutlinedIcon sx={{ color: 'text.primary' }} />
                </Button>
              )}
            </Box>

            <TextInput
              label="Название"
              name={`projects[${index}].projectName`}
              placeholder="Название проекта"
              required
              disabled={disabledInput}
            />

            <SkillSelect
              label="Навыки"
              name={`projects.${index}.skills`}
              placeholder="Навыки"
              required
              disabled={disabledInput}
              options={Skills}
            />

            <AutocompleteRole
              label="Роль на проекте"
              name={`projects.${index}.role`}
              placeholder="Роль"
              disabled={disabledInput}
              required
              options={Roles}
            />

            <FlexBox>
              <DatePickerForm
                label="Начало работы"
                name={`projects.${index}.beginDate`}
                required
                disabled={disabledInput}
              />
              <DatePickerForm
                label="Окончание работы"
                name={`projects.${index}.endDate`}
                required={false}
                disabled={disabledInput}
              />
            </FlexBox>
            {isSubmitSuccessful ? null : isDisabled ? (
              <Button
                variant="contained"
                sx={{ p: 1, m: 1.5, justifySelf: 'flex-end', maxWidth: 'max-content' }}
                onClick={() => {
                  setIsDisabled(false);
                }}
              >
                <ModeEditOutlineIcon />
              </Button>
            ) : (
              <Button
                onClick={onSubmit}
                color="info"
                variant="contained"
                sx={{ p: 2, m: 1.5, justifySelf: 'flex-end', maxWidth: 'max-content' }}
              >
                <Typography variant="button" color="background.default">
                  Добавить
                </Typography>
              </Button>
            )}
          </GridContainer>
        </FormControl>
      </FormBox>
    </>
  );
};

export default ProjectsForm;
