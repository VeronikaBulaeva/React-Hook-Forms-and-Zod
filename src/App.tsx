import MasterForm from '@/components/Forms/MasterForm.tsx';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MasterForm />
        </LocalizationProvider>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
