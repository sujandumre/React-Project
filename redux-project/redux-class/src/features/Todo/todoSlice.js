import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState={
  todos:[{id:"abcd", task:"Demo-task", isDone:false}],
};

export const todoSlice=createSlice({
  name:"task",
  initialState,
  reducers:{
    addToDo:(state,action)=>{
      const newTodo={
        id:nanoid(),
        task:action.payload,
        isDone:false,
      };
     
      state.todos.push(newTodo);
    },
    deleteTodo:(state,action)=>{
      state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
    },
    marksAsDone:(state,action)=>{
      state.todos=state.todos.map((todo)=>{
        if(todo.id === action.payload){
          todo.isDone=true;
        }
      })
    }
  }
});

export const {addToDo,deleteTodo,marksAsDone}=todoSlice.actions;
export default todoSlice.reducer;