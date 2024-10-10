export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface TodoSearchParams {
  page: number | string;
  limit: number | string;
  search: string;
}

export interface TodoListResponse {
  todos: Todo[];
  page: number;
  total: number;
}
