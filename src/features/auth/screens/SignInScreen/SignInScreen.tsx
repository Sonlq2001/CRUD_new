import React, { FC, memo } from "react";

import { Box, InputLabel, Paper } from "@material-ui/core";
import { Formik } from "formik";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormikTextField from "components/FormElements/FormikTextField/FormikTextField";
import { useAppDispatch } from "redux/store";

import CustomMuiButton from "styles/themes/components/CustomMuiButton";
import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";

import InputPassword from "../../components/InputPassword/InputPassword";
import { initFormValue, schema } from "../../helpers/register.helpers";
import { postLogin } from "../../redux/auth.slice";
import { FromValue } from "../../types/auth.types";
import { useStyles } from "./SignInScreen.styles";
import { unwrapResult } from "@reduxjs/toolkit";
/**
 * SignIn Screen
 */
const SignInScreen: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const loginHandler = async (values: FromValue) => {
    try {
      const resultAction = await dispatch(postLogin(values));
      unwrapResult(resultAction);
      toast.success("Đăng nhập thành công !");
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Box mt={3}>
        <Box width={480} mx="auto">
          <Box mb={3}>
            <CustomMuiTypography variant="h5">Login</CustomMuiTypography>
          </Box>
          <Box>
            <Paper elevation={3}>
              <Box p={3}>
                <Formik
                  initialValues={initFormValue}
                  validationSchema={schema}
                  onSubmit={loginHandler}
                >
                  {({ handleSubmit }) => {
                    return (
                      <form onSubmit={handleSubmit} noValidate>
                        <Box mb={2}>
                          <InputLabel htmlFor="email">
                            <Box mb={1}>
                              <CustomMuiTypography variant="subtitle2">
                                Tài khoản
                              </CustomMuiTypography>
                            </Box>
                          </InputLabel>
                          <FormikTextField
                            required
                            fullWidth
                            id="email"
                            name="username"
                            placeholder="Tài khoản"
                            className={classes.wrapperTextField}
                          />
                        </Box>
                        <Box mb={2}>
                          <InputLabel htmlFor="password">
                            <Box mb={1}>
                              <CustomMuiTypography variant="subtitle2">
                                Mật khẩu
                              </CustomMuiTypography>
                            </Box>
                          </InputLabel>
                          <InputPassword
                            className={classes.wrapperTextField}
                            name="password"
                            required
                            fullWidth
                            placeholder="Mật khẩu"
                          />
                        </Box>

                        <CustomMuiButton
                          color="primary"
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                        >
                          Login
                        </CustomMuiButton>
                      </form>
                    );
                  }}
                </Formik>

                <Box mt={3} textAlign="right">
                  <Link to="/register">Đăng kí tài khoản ?</Link>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
        <ToastContainer position="top-right" />
      </Box>
    </>
  );
};

export default memo(SignInScreen);
