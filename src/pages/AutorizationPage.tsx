import {
  Box,
  Container,
  TextField,
  ThemeProvider,
  Button,
} from "@mui/material";
import Inst from "../assets/images/Inst.png";
import { useForm } from "react-hook-form";
import { theme } from "../mui-customization";
import { useAppDispatch } from "../hooks/hooks";
import { autorization } from "../redux/user/autorizationAction";

const AutorizationPage = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (userData: any) => {
    dispatch(autorization(userData));
    reset();
  };

  const autorizationPageStyle = {
    width: "760px",
    height: "100%",
    display: "flex",
    imgBox: {
      width: '437px',
      margin: '0 auto'
    },
    formStyle: {
      width: '720px'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <Container
          sx={autorizationPageStyle}
        >
          <Box sx={{ margin: "auto" }}>
            <Box
              sx={autorizationPageStyle.imgBox}
            >
              <Box
                component="img"
                sx={autorizationPageStyle.imgBox}
                alt="error"
                src={Inst}
              />
            </Box>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={autorizationPageStyle.formStyle}>
                <Box component="label">
                  <TextField
                    id="outlined-basic"
                    label="Имя пользователя"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: "55px",
                      input: {
                        ml: "20px",
                        fontSize: "32px",
                      },
                      userSelect: "none",
                    }}
                    {...register("username", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "минимум 6 символов",
                      },
                    })}
                  />
                </Box>
                <Box component="label">
                  <TextField
                    id="outlined-basic"
                    label="Пароль"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: "32px",
                      input: {
                        ml: "10px",
                      },
                      userSelect: "none",
                    }}
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "минимум 6 символом",
                      },
                    })}
                  />
                </Box>
              </Box>
              <Button
                type="submit"
                disabled={!isValid}
                variant="contained"
                fullWidth
                sx={{ mt: "32px", mb: 0 }}
              >
                Войти
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AutorizationPage;
