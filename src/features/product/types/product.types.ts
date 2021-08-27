export type Todo = {
  id?: string;
  content?: string;
  status?: string;
  isChecked?: boolean;
  createdAt?: string;
};

export type initStateTodo = {
  data: Todo[];
  loading: boolean;
};
