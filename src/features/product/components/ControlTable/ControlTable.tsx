import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useStyles from "./ControlTable.styles";
import { useAppSelector, useAppDispatch } from "redux/store";
import { deleteTodo } from "./../../redux/product.slice";

type ControlProps = {
  handleSearch: any;
};

const ControlTable: React.FC<ControlProps> = ({ handleSearch }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.product);
  const handleDeleteAll = () => {
    data.forEach(item => {
      if (item.isChecked) {
        dispatch(deleteTodo(item.id));
        toast.success("Xóa thành công !");
      }
    });
  };
  const handleKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <>
      <Box mb={1} className={classes.box_group}>
        <Box className={classes.box_delete}>
          <Button
            size="small"
            className={classes.btn_delete_all}
            variant="contained"
            onClick={handleDeleteAll}
          >
            Delete all
          </Button>
        </Box>
        <TextField
          type="text"
          name="name"
          label="Search"
          variant="outlined"
          margin="dense"
          className={classes.box_text}
          onChange={handleKey}
        />
      </Box>

      <ToastContainer autoClose={1000} position="bottom-right" />
    </>
  );
};

export default ControlTable;
