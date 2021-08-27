import React, { FC, useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Fab,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useAppDispatch, useAppSelector } from "redux/store";
import { fetchData, checkTodo, deleteTodo } from "./../../redux/product.slice";

import ControlTable from "./../../components/ControlTable/ControlTable";
import BoxModelAction from "../../components/BoxModelAction/BoxModelAction";
import useStyles from "./ProductScreen.styles";
import { Todo } from "./../../types/product.types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductScreen: FC = () => {
  const classes = useStyles();
  const [statusModel, setStatusModel] = useState<boolean>(false);
  const [itemTodo, setItemTodo] = useState<Todo | null>(null);
  const [keyData, setKeyData] = useState<string>("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { data, loading } = useAppSelector(state => state.product);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (name === "checkAll") {
      dispatch(checkTodo({ checked, name }));
    } else {
      dispatch(checkTodo({ checked, name }));
    }
  };

  const handleRemove = (id: string | undefined) => {
    dispatch(deleteTodo(id));
    toast.success("Xóa thành công ghi chú !");
  };

  const handleEdit = (item: Todo) => {
    setItemTodo(item);
    setStatusModel(!statusModel);
  };

  const handleSearch = (key: string) => {
    setKeyData(key);
  };

  const result = data.filter((item: any) => {
    return item.content.toLowerCase().indexOf(keyData.toLowerCase()) !== -1;
  });

  if (loading) {
    return null;
  }

  return (
    <Box width={1024} mx="auto" py={6}>
      <ControlTable handleSearch={handleSearch} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  name="checkAll"
                  onChange={handleCheck}
                  checked={!data.some(item => item?.isChecked !== true)}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {result.map((item: Todo, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox
                      name={item.id}
                      checked={item?.isChecked || false}
                      onChange={handleCheck}
                    />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.content}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      className={classes.btn_action}
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box className={classes.btn_control}>
        <Fab onClick={() => (setStatusModel(!statusModel), setItemTodo(null))}>
          <AddIcon />
        </Fab>

        <BoxModelAction
          status={statusModel}
          callBack={setStatusModel}
          itemTodo={itemTodo}
          callBackTodo={setItemTodo}
        />
      </Box>

      <ToastContainer autoClose={1000} position="bottom-right" />
    </Box>
  );
};

export default ProductScreen;
