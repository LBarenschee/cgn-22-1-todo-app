import {Todo} from "../model/Todo";
import axios from "axios";
import {Dispatch, SetStateAction} from "react";

export function getTodosbyApi(){
    return axios.get("/api/todo")
        .then(response => response.data)
        .catch(console.error)
}

export function postTodoByApi(todo: {description: string, status: string}){
    return axios.post("/api/todo", todo)
        .then(response => response.data)
        .catch(console.error)
}

export function putTodoByApi(todo: Todo){
    return axios.put("/api/todo/" + todo.id, todo)
        .then(response => response.data)
        .catch(console.error)
}