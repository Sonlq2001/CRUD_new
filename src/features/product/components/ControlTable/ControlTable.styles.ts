import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box_group: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
  },
  box_delete: {
    marginLeft: "15px",
  },
  btn_delete_all: {
    backgroundColor: "#ba000d",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#f44336",
    },
  },
  box_text: {
    marginLeft: "30px",
  },
});

export default useStyles;
