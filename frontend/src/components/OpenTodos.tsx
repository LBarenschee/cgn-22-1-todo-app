import TodoCard from "../components/TodoCard";
import {Todo} from "../model/Todo";
import "./OpenTodos.css";

type OpenTodoProps = {
    todos: Todo []
    onAdvance?: (todo: Todo) => void
}

export default function OpenTodos({ todos, onAdvance} : OpenTodoProps){
    const allOpenTodos = todos.filter((todo)=> todo.status === "open")
    return(

    <div className={"opentodos"}>
        {allOpenTodos.map((element) => <TodoCard todo={element} onAdvance={onAdvance}/>)}
    </div>
    )
        }