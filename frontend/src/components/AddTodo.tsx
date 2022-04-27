import {Todo} from "../model/Todo";
import {FormEvent, useState} from "react";
import {postTodoByApi} from "../service/TodoApiServices";


type AddTodoProps = {
    addTodo: (newTodo: Todo) => void
}


export default function AddTodo({addTodo}: AddTodoProps) {
    const [userInput, setUserInput] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userInput);
        const newTodo = {description: userInput, status: "open"}
        postTodoByApi(newTodo)
        .then(response => addTodo(response))
    }
        return <div>
            <form className={"create-todo"} onSubmit={handleSubmit}>
                <input type="text"
                       value={userInput}
                       onChange={(event) => setUserInput(event.target.value)}
                />
                <button>Create Todo</button>
            </form>
        </div>
    }
