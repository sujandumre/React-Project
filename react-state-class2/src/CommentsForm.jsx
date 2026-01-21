import {useState} from 'react'
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   } 
   return errors;
 };

export default function CommentsForm({addNewComment}){

  // let [formData, setFormData]=useState({
  //   username:"",
  //   remarks:"",
  //   rating:5,
  // });

  const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
        validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
}});

// let inputHandlerChange=(event)=>{
//   setFormData((currData)=>{
//     return {...currData,[event.target.name]:event.target.value};
//   });
// }
// let handleSubmit=(event)=>{
//   console.log(formData);
//   addNewComment(formData);
//   event.preventDefault();
//   setFormData({
//   username:"",
//     remarks:"",
//     rating:5,
// });
// }
  
return(
    <div>
      <h4>Give a Comment!</h4>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor='username'>User Name</label>
      <input placeholder="username" type="text"
       value={formik.values.username} onChange={formik.handleChange} 
       id="username" name="username"/>
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <br /><br />

       <label htmlFor='remarks'>Remarks</label>
      <textarea value={formik.values.remarks} 
      placeholder="Add a Remarks" onChange={formik.handleChange} 
      id="remarks" name="remarks" >Remarks</textarea>
      {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
      <br /><br />

       <label htmlFor='rating'>Rating</label>
      <input placeholder="Rating" type="number" 
      min={1} max={5}  value={formik.values.rating} 
      onChange={formik.handleChange} id="rating" name="rating"/>
      {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
      <br /><br />
      <button type="submit">Add Comments</button>
      </form>
    </div>
  )
}