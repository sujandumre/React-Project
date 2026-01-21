import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './LudoBoard.jsx'
// import LudoBoard from './LudoBoard.jsx'
// import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import Ticket from './Ticket.jsx'
import {sum} from './helper.js';
import Form from './Form.jsx';
import CommentsForm from './CommentsForm.jsx'
import Comment from './Comment.jsx';
import Counter from './Counter.jsx'

function App() {
  let winCondition=(ticket)=>{
    return sum(ticket)===15;
  }

  return (
    <>
      {/* <Lottery n={3} winCondition={winCondition}/> */}
      {/* <CommentsForm/> */}
      {/* <Comment/> */}
      <Counter/>
    </>
  );
}

export default App;
