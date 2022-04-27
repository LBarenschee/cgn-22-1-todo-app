
import {Todo} from "../model/Todo";
import TodoCard from "../components/TodoCard";
import OpenTodos from "../components/OpenTodos";
import AddTodo from "../components/AddTodo";
import InProgressTodos from "../components/InProgressTodos";
import DoneTodos from "../components/DoneTodos";





type TodoOverviewPageProps = {
    todos: Todo[]
    setTodos : (value:Todo) => void
    onAdvance?: (todo: Todo) => void
    onDelete?: (id: string) => void
}

export default function TodoOverviewPage({todos, setTodos, onAdvance, onDelete} : TodoOverviewPageProps){

    const allInProgressTodos = todos.filter((todo)=> todo.status === "in_progress")
    const allDoneTodos = todos.filter((todo)=> todo.status === "done")

    return (
        <main>


        </main>
    )
}