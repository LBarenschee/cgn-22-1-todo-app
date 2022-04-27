import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import {getTodosbyApi} from "../service/TodoApiServices";


export default function UseTodos(){

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodosbyApi()
            .then(data => setTodos(data));
    },  [])

    const addTodo = (newTodo: Todo) => {
        setTodos((allTodos) => [...allTodos, newTodo])
    }
    return {todos, addTodo}
}