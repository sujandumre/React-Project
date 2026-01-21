import {useSelector} from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import {deleteTodo} from '../features/Todo/todoSlice.js'
import {marksAsDone} from '../features/Todo/todoSlice.js'
export default function Todo(){
  const todos=useSelector((state) => state.todos);
  // const todos = useSelector((state) => state.todos?.todos || []);

  console.log(todos);
   const dispatch=useDispatch();

  const clickHandler=(id)=>{
    console.log("delete",id);
    dispatch(deleteTodo(id));
  }
  const clickAsHandler=(id)=>{
    console.log("Done task",id);
    dispatch(marksAsDone(id));
  }
  return(
    <>
    <AddForm/>
    <h2>Todos List App</h2>
    <ul>{
      todos.map((todo)=>(
        <li key={todo.id}>{todo.task}
        <button onClick={()=>clickHandler(todo.id)}>Delete</button>
        <button onClick={()=>clickAsHandler(todo.id)}>Mark As Done</button>
        
        </li>
      ))}
    </ul>
    </>
  );
}