import {useState} from 'react'
import './Comment.css';
import CommentsForm from './CommentsForm';
export default function Comment(){
  let [comment,setComments]=useState([{
    username:"@sujan",
    remarks:"great job!",
    rating:4,
  },]);

  let addNewComment=(comment)=>{
    setComments((currComment)=>
      [...currComment, comment]
    );
  }
  return(
    <>
    
    <div>
      <h3>All Comments!</h3>
      {comment.map((comment,idx)=>(
         <div className='comment' key={idx}>
        <span>{comment.remarks}</span>
        &nbsp;&nbsp; 
        <span>(rating={comment.rating})</span>
        &nbsp;
        <p> {comment.username}</p>
      </div>
      ))}
     
    </div>
    <CommentsForm addNewComment={addNewComment}/>
    </>
  )
}