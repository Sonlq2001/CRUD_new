import React, { FC, memo, useState } from "react";

import { IconButton } from "@material-ui/core";
import VisibilityRounded from "@material-ui/icons/Visibility";
import VisibilityOffRounded from "@material-ui/icons/VisibilityOff";

import FormikTextField, {
  FormikTextFieldProps,
} from "components/FormElements/FormikTextField/FormikTextField";

const InputPassword: FC<FormikTextFieldProps> = ({ ...rest }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      <FormikTextField
        type={isShowPassword ? "text" : "password"}
        {...rest}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? (
                <VisibilityRounded />
              ) : (
                <VisibilityOffRounded />
              )}
            </IconButton>
          ),
        }}
      />
    </>
  );
};

export default memo(InputPassword);
