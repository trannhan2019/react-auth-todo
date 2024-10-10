import { TodoListResponse, TodoSearchParams } from "../types/todo.type";
import httpClient from "../utils/http";

const URL = "/api/todo";

const todoApi = {
  getTodos: (searchParams: TodoSearchParams) => {
    console.log(searchParams);

    return httpClient.get<TodoListResponse>(URL, { params: searchParams });
  },
  addTodo: (title: string) => {
    return httpClient.post(URL, { title });
  },
  updateTodo: (id: number, title: string) => {
    return httpClient.put(`${URL}/${id}`, { title });
  },
  deleteTodo: (id: number) => {
    return httpClient.delete(`${URL}/${id}`);
  },
};

export default todoApi;
