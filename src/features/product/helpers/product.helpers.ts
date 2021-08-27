import * as Yup from "yup";

export const schema = Yup.object({
  content: Yup.string().required("Vui lòng nhập tên bài viết !"),
});

export const initState = {
  content: "",
};
