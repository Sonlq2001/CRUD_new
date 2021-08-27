import React, { FC } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import CloseIcon from "@material-ui/icons/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStyle from "./BoxModelAction.style";
import { initState, schema } from "./../../helpers/product.helpers";
import FormikTextField from "components/FormElements/FormikTextField/FormikTextField";
import { Todo } from "./../../types/product.types";
import { postTodo, updateTodo } from "./../../redux/product.slice";
import { useAppDispatch } from "redux/store";

interface BoxModel {
  status: boolean;
  callBack: any;
  callBackTodo: any;
  itemTodo: Todo | null;
}

const BoxModelAction: FC<BoxModel> = ({
  status,
  callBack,
  callBackTodo,
  itemTodo,
}) => {
  const classes = useStyle();
  const dispatch = useAppDispatch();
  const handleClose = () => {
    callBack(!status);
  };

  let initStateForm = itemTodo ? itemTodo : initState;

  const handleAdd = (dataForm: Todo) => {
    if (itemTodo) {
      dataForm.id = itemTodo.id;
      dispatch(updateTodo(dataForm));
      callBackTodo(null);
    } else {
      dispatch(postTodo(dataForm));
    }

    toast.success(`${itemTodo ? "Sửa" : "Thêm"} ghi chú thành công !`);
    setTimeout(() => {
      callBack(!status);
    }, 1000);
  };

  return (
    <>
      {status && (
        <>
          <Box className={classes.wrap_action}>
            <Box className={classes.wrap_form} py={3} px={2}>
              <Typography variant="h5">
                {itemTodo ? "Sửa" : "Thêm"} ghi chú
              </Typography>
              <Box className={classes.close_form} onClick={handleClose}>
                <CloseIcon />
              </Box>

              <Box mt={2}>
                <Formik
                  initialValues={initStateForm}
                  validationSchema={schema}
                  onSubmit={handleAdd}
                >
                  {() => {
                    return (
                      <Form>
                        <Box mb={2}>
                          <FormikTextField
                            name="content"
                            type="text"
                            label="Title"
                            fullWidth
                            variant="outlined"
                          />
                        </Box>
                        <Box mb={2} textAlign="right">
                          <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            color="primary"
                          >
                            {itemTodo ? "Edit" : "Add"}
                          </Button>
                        </Box>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Box>
          </Box>
          <ToastContainer autoClose={1000} position="bottom-right" />
        </>
      )}
    </>
  );
};

export default BoxModelAction;
