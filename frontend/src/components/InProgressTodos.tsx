import TodoCard from "../components/TodoCard";
import {Todo} from "../model/Todo";

type InProgressTodoProps = {
    todos: Todo[]
}

export default function InProgressTodos({todos} : InProgressTodoProps){

    return <div className={"inprogresstodos"}>
        {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)

        }</div>
}