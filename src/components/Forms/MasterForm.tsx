import {Box, Button, styled, Tab, Tabs, Typography} from '@mui/material';
import {useCallback, useState} from 'react';
import UserForm from '@/components/Forms/UserForm.tsx';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import TabPanel from '@/components/TabPanel/TabPanel.tsx';
import ProjectFormsTab from '@/components/TabPanel/ProjectFormsTab/ProjectFormsTab.tsx';
import {FormProvider, useForm} from 'react-hook-form';
import {FormFields, formSchema} from '@/components/schemas/Schemas.ts';
import {zodResolver} from '@hookform/resolvers/zod';

const defaultValues = {
  surname: '',
  name: '',
  lastName: '',
  email: '',
  phone: '',
  checkbox: false,
  projects: [
    {
      projectName: '',
      skills: [],
      role: '',
      projectId: 1,
    },
  ],
};

const MasterForm = () => {
  const [tabValue, setTabValue] = useState(0);

  const methods = useForm<FormFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onEdit = useCallback(() => {
    methods.reset(undefined, {keepValues: true, keepErrors: true});
  }, [methods]);

  const onSubmit = () => {
  };

  const tabProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
    };
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => {
            setTabValue(newValue);
          }}
        >
          <Tab label="Контактная информация" {...tabProps(0)} />
          <Tab label="Проекты" {...tabProps(1)} />
        </Tabs>
        <FormSection>
          <Box sx={{display: 'grid'}}>
            <FormBox>
              <TabPanel index={0} value={tabValue}>
                <UserForm/>
              </TabPanel>
              <TabPanel index={1} value={tabValue}>
                <ProjectFormsTab/>
              </TabPanel>
            </FormBox>
            <Box display="flex" justifyContent="flex-end">
              <>
                {methods.formState.isSubmitSuccessful ? (
                  <Button
                    variant="contained"
                    sx={{p: 1, m: 1.5, maxWidth: 'max-content'}}
                    onClick={() => {
                      onEdit();
                    }}
                  >
                    <ModeEditOutlineIcon/>
                  </Button>
                ) : null}

                {!methods.formState.isSubmitSuccessful ? (
                  <Button
                    color="info"
                    variant="contained"
                    type="submit"
                    sx={{p: 2, m: 1.5, maxWidth: 'max-content'}}
                  >
                    <Typography variant="button" color="background.default">
                      Сохранить
                    </Typography>
                  </Button>
                ) : null}
              </>
            </Box>
          </Box>
        </FormSection>
      </form>
    </FormProvider>
  );
};

const FormSection = styled('section')`
    background-color: ${({theme}) => theme.palette.primary.light};
    border: 1px solid ${({theme}) => theme.palette.secondary.main};
    max-width: max-content;

    ${({theme}) => theme.breakpoints.down('md')} {
        max-width: 100%;
    }
`;

const FormBox = styled(Box)`
    border-bottom: 1px solid ${({theme}) => theme.palette.secondary.main};

    ${({theme}) => theme.breakpoints.down('md')} {
        max-width: 100%;
    }
`;

export default MasterForm;
