import * as Yup from "yup";

const username = Yup.string().required("Vui lòng nhập tên tài khoản !");

const password = Yup.string()
  .required("Vui lòng nhập mật khẩu !")
  .min(8, "Độ dài tối thiểu là 8 kí tự !")
  .matches(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/,
    "Yêu cầu có 1 số, 1 kí tự thường và 1 kí tự in hoa"
  );

export const schema = Yup.object({
  username,
  password,
});

export const initFormValue = {
  username: "",
  password: "",
};
