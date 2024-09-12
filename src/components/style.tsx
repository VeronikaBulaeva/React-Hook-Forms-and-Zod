import { styled } from '@mui/material';

export const FormBox = styled('div')`
  box-shadow: ${({ theme }) => theme.palette.shadow.shadow};
  border-radius: 4px;
  max-width: 600px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.background.default};

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 100%;
  }
`;

export const GridContainer = styled('div')`
  display: grid;
  gap: 16px;
  align-items: flex-start;
  padding: 16px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: center;
  }
`;

export const FlexBox = styled('div')`
  display: flex;
  gap: 16px;
  justify-content: flex-start;

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: grid;
  }
`;

export const FlexCheckBox = styled('div')`
  display: flex;
  gap: 6px;
  justify-content: flex-start;
`;
