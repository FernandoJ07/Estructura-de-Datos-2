import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onDeleteTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />
                ))
            }
        </ul>
    )
}