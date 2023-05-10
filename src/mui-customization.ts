import { createTheme } from "@mui/material";

export const theme = createTheme({
    shape: {
      borderRadius: 24,
    },
    typography: {
      fontSize: 25
    },
    components: {
      MuiButton: {
        styleOverrides: {
            root: {
                backgroundColor: '#79A7FF',
                borderRadius: '24px',
                paddingTop: '12px',
                paddingBottom: '12px',
            }
        }
      },
    }
  })