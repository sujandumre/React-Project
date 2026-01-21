function handleClick(event){
  console.log("button was Clicked");
  console.log(event);
}

function onMouseOver(){
  console.log("bye bye clicked");
}
function handHover(){
  console.log("hover");
}
function doubleClicked(){
  console.log("you clicked doubled");
}
export default function Button() {
  return(
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onClick={onMouseOver}>bye bye</p>
      <p onMouseOver={handHover}>Hover over me!</p>
      <button onDoubleClick={doubleClicked()}>Double clicked on me!</button>
    </div>
  );
}