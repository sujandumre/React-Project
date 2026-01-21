import {useState} from 'react'
// import './Lottery.css';
import { genTicket,sum } from './helper';
import Ticket from './Ticket.jsx';

export default function Lottery({n=3,winCondition}){
  let [ticket,setTicket]=useState(genTicket(n));
  let isWinning=winCondition(ticket);

  let buyNewTicket=()=>{
    setTicket(genTicket(n))
  }
  return(
    <div>
      <h1>Lottery Game!</h1>
      <div className='ticket'>
       <Ticket ticket={ticket}/>
      </div>
      <button onClick={buyNewTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulation, You won!"}</h3>
    </div>
  )
}