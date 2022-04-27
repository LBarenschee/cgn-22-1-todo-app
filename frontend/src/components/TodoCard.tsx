import {Todo} from "../model/Todo";
import {useNavigate} from "react-router-dom";


type TodoCardProps = {
    todo: Todo
    onAdvance?: (todo: Todo) => void
    onDelete?: (id: string) => void
}

export default function TodoCard({todo, onAdvance, onDelete}: TodoCardProps){
    const navigate = useNavigate()

    return(
        <div className={"todo-item"}>
            <h3>{todo.description}</h3>
            {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
            {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
            <button onClick={()=> navigate(`/todo/${todo.id}`)}>Details</button>
        </div>
    )
}