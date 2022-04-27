import TodoCard from "../components/TodoCard";
import {Todo} from "../model/Todo";

type DoneTodoProps = {
    todos: Todo[]
}

export default function DoneTodos({todos} : DoneTodoProps){
    return <div className={"donetodos"}>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)

        }</div>
}