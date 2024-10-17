import { TodoListResponse, TodoSearchParams } from "../types/todo.type";
// import httpClient from "../utils/http";
import axios from "../utils/axios";

const URL = "/todo";

const todoApi = {
  getTodos: (searchParams: TodoSearchParams) => {
    console.log(searchParams);

    return axios.get<TodoListResponse>(URL, { params: searchParams });
  },
  addTodo: (title: string) => {
    return axios.post(URL, { title });
  },
  updateTodo: (id: number, title: string) => {
    return axios.put(`${URL}/${id}`, { title });
  },
  deleteTodo: (id: number) => {
    return axios.delete(`${URL}/${id}`);
  },
};

export default todoApi;
