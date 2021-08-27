import React from "react";
import { Box, Paper, InputLabel } from "@material-ui/core";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch } from "redux/store";

import CustomMuiButton from "styles/themes/components/CustomMuiButton";
import CustomMuiTypography from "styles/themes/components/CustomMuiTypography";
import FormikTextField from "components/FormElements/FormikTextField/FormikTextField";
import InputPassword from "../../components/InputPassword/InputPassword";
import { useStyles } from "./../SignInScreen/SignInScreen.styles";

import { schema, initFormValue } from "./../../helpers/register.helpers";
import { FromValue } from "./../../types/auth.types";
import { postRegister } from "./../../redux/auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";

const RegisterScreen: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleRegister = async (dataForm: FromValue, resetForm: any) => {
    try {
      const resultAction = await dispatch(postRegister(dataForm));
      unwrapResult(resultAction);
      toast.success("Đăng kí tài khoản thành công !");
      resetForm({ username: "", password: "" });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box mt={3}>
      <Box width={480} mx="auto">
        <Box mb={3}>
          <CustomMuiTypography variant="h5">Register</CustomMuiTypography>
        </Box>
        <Box>
          <Paper elevation={3}>
            <Box p={3}>
              <Formik
                initialValues={initFormValue}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) =>
                  handleRegister(values, resetForm)
                }
              >
                {() => {
                  return (
                    <Form noValidate>
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
                          id="account"
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
                      {/* {loginError && (
                        <Box mb={2}>
                          <FormHelperText error>{loginError}</FormHelperText>
                        </Box>
                      )} */}
                      <CustomMuiButton
                        color="primary"
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                      >
                        Register
                      </CustomMuiButton>
                    </Form>
                  );
                }}
              </Formik>

              <Box mt={3} textAlign="right">
                <Link to="/sign-in">Đăng nhập ?</Link>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      <ToastContainer position="top-right" />
    </Box>
  );
};

export default RegisterScreen;
