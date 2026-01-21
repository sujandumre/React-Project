import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}) {
 let oldPrices=["23,444","45,645","56,675","3,453"];
 let newPrices=["675","78,898","90,776","24,342"] 
 let description=[["8,000 DPI ","5-programmable buttons"],["intuitive surface","Closed Surface"],["design for apple","Launching Iphone-17"],["Wireless","Bluetooth Connected"]]
   return(
    <div className="Product" >
    
    <h3>{title}</h3>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>

    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}
export default Product;