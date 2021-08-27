import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  wrap_action: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  wrap_form: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px 20px 30px 20px",
  },

  close_form: {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
  },

  form_group: {
    "&:not(:first-child)": {
      marginTop: "20px",
    },
  },
});

export default useStyle;
