import * as Yup from "yup";

const email = Yup.string().required().max(254).email();

const password = Yup.string()
  .required()
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\wｧ-ﾝﾞﾟ!"#$%&'()*+,–\-./:;<=>?@[\]^_`{|}]{8,32}$/
  );

export const schema = Yup.object({
  email,
  password,
});

export const initFormValue = {
  email: "",
  password: "",
};
