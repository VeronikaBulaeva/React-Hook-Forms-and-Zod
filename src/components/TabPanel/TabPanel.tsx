import {Box} from '@mui/material';
import {PropsWithChildren} from 'react';

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel = ({children, index, value, ...other}: PropsWithChildren<TabPanelProps>) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabPanel;
