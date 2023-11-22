import { useSelector } from "react-redux"
import TodoCard from "./TodoCard"
// store'a eklenmiş olan todoları burada çekip listelemeliyiz.Bir bileşenden store içindeki verilere
// erişmek için store'a, o bileşenden subscribe oluruz. Bunu Context'te usecontext ile yapıyorduk. 
// redux'ta bunun için useSelector kullanıyoruz. 7. satırda todoR. yi kaldırırsak komple store'a abone oluruz

const ListTodos = () => {
  const state = useSelector((store) => store.todoReducer)
  return (
    <div>
      {state.todos.length === 0 ? (<h5>Your to-do list is empty! Let's party!</h5>) : (
        state.todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
      )}
    </div>
  )
}

export default ListTodos